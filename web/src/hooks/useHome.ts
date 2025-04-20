import { getLinks } from '@/api/getLinks'
import { useLinkStore } from '@/stores/link'
import type { LinkProps } from '@/types/links'
import { useEffect, useState } from 'react'

export function useHome() {
  const { links, setLinks } = useLinkStore()

  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    async function getStreamLinks() {
      const response = await getLinks()

      const reader = response.body!.getReader()
      const decoder = new TextDecoder('utf-8')
      let done = false

      while (!done) {
        const { value, done: streamDone } = await reader.read()
        done = streamDone
        if (value) {
          const chunkDecoded = decoder.decode(value, { stream: true })
          const chunks = chunkDecoded.split('\n')

          chunks.map(chunk => {
            if (chunk !== '') {
              const linksFromChunk = JSON.parse(chunk) as LinkProps[]
              setLinks(links =>
                [...links, ...linksFromChunk].sort((a, b) =>
                  b.createdAt.localeCompare(a.createdAt)
                )
              )
            }
          })
        }
      }
      setIsLoading(false)
    }

    getStreamLinks()
  }, [setLinks])

  useEffect(() => {
    const channel = new BroadcastChannel('update-access-count')

    channel.onmessage = event => {
      setLinks(links =>
        links.map(link => {
          if (link.urlShortened === event.data.urlShortened) {
            return {
              ...link,
              numberOfAccess: event.data.numberOfAccess,
            }
          }
          return link
        })
      )
    }
  }, [setLinks])

  return {
    links,
    isLoading,
  }
}
