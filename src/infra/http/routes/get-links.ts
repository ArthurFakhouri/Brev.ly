import { PassThrough, Readable, Transform, Writable } from 'node:stream'
import { pipeline } from 'node:stream/promises'
import type { LinkProps } from '@/app/functions/get-links'
import { getLinksFn } from '@/functions/get-links'
import { redis } from '@/redis'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

type LinkResponseProps = {
  urlShortened: string
  urlOriginal: string
  numberOfAccess: number
}

export const getLinksRoute: FastifyPluginAsyncZod = async server => {
  server.get(
    '/links',
    {
      schema: {
        summary: 'Get all links',
        response: {
          200: z.instanceof(Readable).describe('A list of links'),
        },
      },
    },
    async (request, reply) => {
      const cursor = getLinksFn()

      reply.raw.writeHead(200, {
        'content-type': 'text/plain',
        'access-control-allow-origin': '*',
      })
      await pipeline(
        cursor,
        new Transform({
          objectMode: true,
          async transform(chunks: LinkProps[], encoding, callback) {
            const links = []
            for await (const chunk of chunks) {
              const numberOfAccess = Number.parseInt(
                (await redis.get(chunk.url_shortened)) ?? '0'
              )
              links.push({
                urlShortened: chunk.url_shortened,
                urlOriginal: chunk.url_original,
                numberOfAccess,
                createdAt: chunk.created_at,
              })
            }
            this.push(links)
            callback()
          },
        }),
        new Writable({
          objectMode: true,
          write(chunks, encoding, callback) {
            Promise.resolve(
              setTimeout(() => {
                reply.raw.write(`${JSON.stringify(chunks)}\n`)
                callback()
              }, 300)
            )
          },
        })
      )
      reply.raw.end()
    }
  )
}
