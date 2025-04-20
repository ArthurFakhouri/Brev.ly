import { api } from '@/libs/axios'

export async function removeLink(urlShortened: string) {
  return await api.delete('links', {
    data: {
      urlShortened,
    },
  })
}
