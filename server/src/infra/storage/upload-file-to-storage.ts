import { randomUUID } from 'node:crypto'
import { basename, extname } from 'node:path'
import { Readable } from 'node:stream'
import { env } from '@/env'
import { Upload } from '@aws-sdk/lib-storage'
import { z } from 'zod'
import { r2 } from './client'

const uploadFileToStorageSchema = z.object({
  fileName: z.string(),
  contentType: z.string(),
  contentStream: z.instanceof(Readable),
})

type UploadFileToStorageProps = z.infer<typeof uploadFileToStorageSchema>

export async function uploadFileToStorage(props: UploadFileToStorageProps) {
  const { fileName, contentType, contentStream } =
    uploadFileToStorageSchema.parse(props)

  const fileExtension = extname(fileName)
  const fileNameWithoutExtension = basename(fileName).replace(fileExtension, '')
  const sanitizedFileName = fileNameWithoutExtension.replace(
    /[^a-zA-Z0-9]/g,
    ''
  )
  const sanitizedFileNameWithExtension = `${sanitizedFileName}${fileExtension}`

  const uniqueFileName = `downloads/${randomUUID()}-${sanitizedFileNameWithExtension}`

  const upload = new Upload({
    client: r2,
    params: {
      Key: uniqueFileName,
      Bucket: env.CLOUDFLARE_BUCKET,
      Body: contentStream,
      ContentType: contentType,
    },
  })

  await upload.done()

  return {
    key: uniqueFileName,
    url: new URL(uniqueFileName, env.CLOUDFLARE_PUBLIC_URL).toString(),
  }
}
