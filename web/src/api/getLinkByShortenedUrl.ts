import { api } from '@/libs/axios'
import type { GetLinkResponse } from '@/types/links'

type GetLinkByShortenedURLProps = {
  urlShortened: string
}

export async function getLinkByShortenedURL({
  urlShortened,
}: GetLinkByShortenedURLProps) {
  return await api.get<GetLinkResponse>('/link', {
    params: {
      url: urlShortened,
    },
  })
}
