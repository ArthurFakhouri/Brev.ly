import { api } from '@/libs/axios'
import type { IncrementAccessLinkResponse } from '@/types/links'

export async function incrementAccessLink(urlShortened: string) {
  return await api.patch<IncrementAccessLinkResponse>('/link', {
    urlShortened,
  })
}
