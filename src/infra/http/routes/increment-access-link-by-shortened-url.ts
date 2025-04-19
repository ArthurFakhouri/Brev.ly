import { getLinkByShortenedURLFn } from '@/functions/get-link-by-shortened-url'
import { incrementAccessLinkFn } from '@/functions/increment-access-link'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const incrementAccessLinkByShortenedURLRoute: FastifyPluginAsyncZod =
  async server => {
    server.patch(
      '/link',
      {
        schema: {
          summary: 'Increment access link by shortened URL',
          body: z.object({
            urlShortened: z.string().url(),
          }),
          response: {
            200: z
              .object({
                numberOfAccess: z.number(),
              })
              .describe('Link access amount'),
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
        const { urlShortened } = request.body

        const link = await getLinkByShortenedURLFn({
          urlShortened,
        })

        if (!link) {
          return reply.status(404).send({
            message: 'Link não encontrado.',
          })
        }

        const numberOfAccess = await incrementAccessLinkFn({
          urlShortened,
        })

        return reply.send({
          numberOfAccess,
        })
      }
    )
  }
