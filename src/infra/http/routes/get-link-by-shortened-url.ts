import { getLinkByShortenedURLFn } from '@/functions/get-link-by-shortened-url'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const getLinkByShortenedURLRoute: FastifyPluginAsyncZod =
  async server => {
    server.get(
      '/link',
      {
        schema: {
          summary: 'Get link by shortened URL',
          querystring: z.object({
            url: z.string().url(),
          }),
          response: {
            200: z
              .object({
                urlOriginal: z.string().url(),
              })
              .describe('Found original URL'),
            400: z
              .object({
                errors: z.array(
                  z.object({
                    name: z.string(),
                    error: z.string(),
                  })
                ),
              })
              .describe('Invalid request body'),
            404: z
              .object({
                message: z.string(),
              })
              .describe('Link not found'),
          },
        },
      },
      async (request, reply) => {
        const { url } = request.query

        const link = await getLinkByShortenedURLFn({
          urlShortened: url,
        })

        if (!link) {
          return reply.status(404).send({
            message: 'Link não encontrado.',
          })
        }

        return reply.send({
          urlOriginal: link.urlOriginal,
        })
      }
    )
  }
