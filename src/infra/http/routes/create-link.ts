import { createLinkFn } from '@/functions/create-link'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const createLinkRoute: FastifyPluginAsyncZod = async server => {
  server.post(
    '/links',
    {
      schema: {
        summary: 'Create a link',
        body: z.object({
          urlShortened: z.string().url(),
          urlOriginal: z.string().url(),
        }),
        response: {
          201: z
            .object({
              urlShortened: z.string().url().describe('URL shortened'),
              urlOriginal: z.string().url().describe('URL original'),
              numberOfAccess: z.number().describe('Number of access of link'),
              createdAt: z.date().nullable().describe('New URL shortened'),
            })
            .describe('New link created'),

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

          409: z
            .object({
              message: z.string(),
            })
            .describe('Link shortened url already exists'),
        },
      },
    },
    async (request, reply) => {
      const newLink = await createLinkFn(request.body)

      if (newLink === null) {
        return reply.status(409).send({
          message: 'URL encurtada já existe!',
        })
      }

      return reply.status(201).send({
        ...newLink,
        numberOfAccess: 0,
      })
    }
  )
}
