import type { LinkProps } from '@/types/links'
import type { SetStateAction } from 'react'
import { create } from 'zustand'

export type LinkStoreProps = {
  links: LinkProps[]
  setLinks: (links: SetStateAction<LinkStoreProps['links']>) => void
}

export const useLinkStore = create<LinkStoreProps>(set => ({
  links: [],
  setLinks: (links: SetStateAction<LinkProps[]>) => {
    if (typeof links === 'function') {
      set((state: LinkStoreProps) => {
        return { links: links(state.links) }
      })
    } else {
      set({ links: links })
    }
  },
}))
