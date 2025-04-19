import { removeLink } from '@/api/removeLink'
import { useLinkStore } from '@/stores/link'

export function useListLinks() {
  const setLinks = useLinkStore(state => state.setLinks)

  async function handleRemoveLink(urlShortened: string) {
    await removeLink(urlShortened)
    setLinks(links => links.filter(link => link.urlShortened !== urlShortened))
  }

  function handleOpenLink(urlShortened: string) {
    const { origin } = window.location
    window.open(
      `${origin}/${urlShortened.replace(`${window.location.host}/`, '')}`,
      '_blank'
    )
  }

  return {
    handleOpenLink,
    handleRemoveLink,
  }
}
