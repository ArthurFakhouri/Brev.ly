import { api } from '@/libs/axios'
import type { LinkProps } from '@/types/links'
import type { NewLinkProps } from '@/validations/newLink'

export async function createLink(newLink: NewLinkProps) {
  return await api.post<LinkProps>('links', {
    urlShortened: newLink.urlShortened,
    urlOriginal: newLink.urlOriginal,
  })
}
