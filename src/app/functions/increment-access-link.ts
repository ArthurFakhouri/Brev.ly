import { redis } from '@/redis'
import { z } from 'zod'

const inscrementAccessLinkSchema = z.object({
  urlShortened: z.string().url(),
})

type IncrementAccessLinkProps = z.infer<typeof inscrementAccessLinkSchema>

export async function incrementAccessLinkFn(input: IncrementAccessLinkProps) {
  const { urlShortened } = inscrementAccessLinkSchema.parse(input)

  return await redis.incr(urlShortened)
}
