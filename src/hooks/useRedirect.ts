import { getLinkByShortenedURL } from '@/api/getLinkByShortenedUrl'
import { incrementAccessLink } from '@/api/incrementAccessLink'
import { useLinkStore } from '@/stores/link'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'sonner'

export function useRedirect() {
  const navigate = useNavigate()
  const params = useParams()
  const { setLinks } = useLinkStore()
  const [urlOriginal, setUrlOriginal] = useState<string | null>(null)

  useEffect(() => {
    const host = window.location.host

    async function getLink() {
      const urlShortened = `${host}/${params['url-shortened']}`
      try {
        const { data } = await getLinkByShortenedURL({ urlShortened })

        setUrlOriginal(data.urlOriginal)
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.status === 404) {
            toast.error(error.response?.data.message)
            navigate('/url/not-found')
          }
          if (error.status === 400) {
            toast.error(error.response?.data.name, {
              description: error.response?.data.error,
            })
          }
        } else {
          toast.error('Não foi possível buscar o link')
        }
      }
    }

    if (params['url-shortened']) {
      getLink()
    }
  }, [params['url-shortened'], navigate])

  useEffect(() => {
    const host = window.location.host

    async function incrementAccess() {
      const { data } = await incrementAccessLink(
        `${host}/${params['url-shortened']!}`
      )

      const numberOfAccess = data.numberOfAccess

      return numberOfAccess
    }

    function createLink(url: string) {
      const anchorLink = document.createElement('a')
      anchorLink.href = url
      anchorLink.style.display = 'none'

      return anchorLink
    }

    async function redirectToLink() {
      const numberOfAccess = await incrementAccess()
      const link = createLink(urlOriginal!)

      const updatedData = {
        urlShortened: `${host}/${params['url-shortened']!}`,
        numberOfAccess,
      }
      const channel = new BroadcastChannel('update-access-count')
      channel.postMessage(updatedData)
      channel.close()

      link.click()
      link.remove()
    }

    if (urlOriginal !== null && params['url-shortened']) {
      redirectToLink()
    }
  }, [urlOriginal, params['url-shortened']])

  return {
    urlOriginal,
  }
}
