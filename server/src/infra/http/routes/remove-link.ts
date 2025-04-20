import { db } from '@/postgres'
import { redis } from '@/redis'
import { schema } from '@/schema'
import { eq } from 'drizzle-orm'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const removeLinkRoute: FastifyPluginAsyncZod = async server => {
  server.delete(
    '/links',
    {
      schema: {
        summary: 'Remove a link',
        body: z.object({
          urlShortened: z.string().url(),
        }),
        response: {
          204: z.object({}).describe('Link removed successfully'),

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

      const { links } = schema

      const link = await db.query.links.findFirst({
        where: eq(links.urlShortened, urlShortened),
      })

      if (!link) {
        return reply.status(404).send({
          message: 'Link não encontrado!',
        })
      }

      await db.delete(links).where(eq(links.urlShortened, urlShortened))
      await redis.del(urlShortened)

      return reply.status(204).send()
    }
  )
}
