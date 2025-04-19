import { db } from '@/postgres'
import { schema } from '@/schema'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

const createLinkSchema = z.object({
  urlOriginal: z.string().url(),
  urlShortened: z.string().url(),
})

type CreateLinkProps = z.infer<typeof createLinkSchema>

export async function createLinkFn(linkProps: CreateLinkProps) {
  const { urlOriginal, urlShortened } = createLinkSchema.parse(linkProps)

  const { links } = schema

  const existsUrlShortened = await db.query.links.findFirst({
    where: eq(links.urlShortened, urlShortened),
  })

  if (existsUrlShortened) return null

  const [createdLink] = await db
    .insert(links)
    .values({
      urlOriginal,
      urlShortened,
    })
    .returning()

  return createdLink
}
