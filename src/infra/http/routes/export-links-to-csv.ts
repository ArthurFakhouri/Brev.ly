import { exportLinksToCSVFn } from '@/functions/export-links-to-csv'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const exportLinksToCSVRoute: FastifyPluginAsyncZod = async server => {
  server.post(
    '/links/exports',
    {
      schema: {
        summary: 'Export all links to CSV file',
        response: {
          200: z
            .object({
              reportUrl: z.string().url(),
              progress: z.number(),
            })
            .describe('CSV URL'),
        },
      },
    },
    async (request, reply) => {
      await exportLinksToCSVFn(reply)
    }
  )
}
