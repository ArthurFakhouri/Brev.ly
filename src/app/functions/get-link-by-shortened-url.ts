import { db } from '@/postgres'
import { redis } from '@/redis'
import { schema } from '@/schema'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

const getLinkByShortenedURLSchema = z.object({
  urlShortened: z.string().url(),
})

type GetLinkByShortenedURLProps = z.infer<typeof getLinkByShortenedURLSchema>

export async function getLinkByShortenedURLFn(
  input: GetLinkByShortenedURLProps
) {
  const { urlShortened } = getLinkByShortenedURLSchema.parse(input)

  const { links } = schema

  const link = await db.query.links.findFirst({
    where: eq(links.urlShortened, urlShortened),
  })

  return link
}
