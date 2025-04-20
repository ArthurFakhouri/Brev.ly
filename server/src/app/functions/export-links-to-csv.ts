import { PassThrough, Transform } from 'node:stream'
import { pipeline } from 'node:stream/promises'
import { db, pg } from '@/postgres'
import { redis } from '@/redis'
import { uploadFileToStorage } from '@/storage/upload-file-to-storage'
import { stringify } from 'csv-stringify'
import type { FastifyReply } from 'fastify'
import { getLinksFn } from './get-links'
import type { LinkProps } from './get-links'

export async function exportLinksToCSVFn(reply: FastifyReply) {
  await pg.unsafe('ANALYZE links')
  const estimatedTotal = await pg.unsafe(
    `SELECT reltuples as estimate FROM pg_class WHERE relname = 'links'`
  )

  const cursor = getLinksFn(2)

  const csv = stringify({
    delimiter: ',',
    header: true,
    encoding: 'utf8',
    columns: [
      {
        key: 'url_shortened',
        header: 'URL Encurtada',
      },
      {
        key: 'url_original',
        header: 'URL Original',
      },
      {
        key: 'number_of_access',
        header: 'Quantidade de acessos',
      },
      {
        key: 'created_at',
        header: 'Data de criação',
      },
    ],
  })

  const uploadToStorageStream = new PassThrough()

  let chunksLoaded = 0

  const convertToCSVPipeline = pipeline(
    cursor,
    new Transform({
      objectMode: true,
      async transform(chunks: LinkProps[], encoding, callback) {
        for await (const chunk of chunks) {
          const numberOfAccess = Number.parseInt(
            (await redis.get(chunk.url_shortened)) || '0'
          )
          chunksLoaded += 1
          this.push({
            ...chunk,
            number_of_access: numberOfAccess,
          })
          reply.raw.write(
            `${JSON.stringify({
              reportUrl: '',
              progress: Math.floor(
                (chunksLoaded / estimatedTotal[0].estimate) * 100
              ),
            })}\n`
          )
        }
        callback()
      },
    }),
    csv,
    uploadToStorageStream
  )

  const uploadToStorage = uploadFileToStorage({
    contentType: 'text/csv',
    fileName: `${new Date().toISOString()}-links.csv`,
    contentStream: uploadToStorageStream,
  })

  reply.raw.writeHead(200, {
    'content-type': 'text/plain',
    'access-control-allow-origin': '*',
  })

  const [{ url }] = await Promise.all([uploadToStorage, convertToCSVPipeline])

  reply.raw.write(
    `${JSON.stringify({
      reportUrl: url,
      progress: Math.floor((chunksLoaded / estimatedTotal[0].estimate) * 100),
    })}\n`
  )
  return reply.raw.end()
}
