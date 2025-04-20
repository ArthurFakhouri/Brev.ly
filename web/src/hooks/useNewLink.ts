import { createLink } from '@/api/createLink'
import { useLinkStore } from '@/stores/link'
import { type NewLinkProps, newLinkSchema } from '@/validations/newLink'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export function useNewLink() {
  const setLinks = useLinkStore(state => state.setLinks)

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewLinkProps>({
    resolver: zodResolver(newLinkSchema),
    defaultValues: {
      urlOriginal: '',
      urlShortened: '',
    },
  })

  async function handleCreateNewLink(newLinkFormData: NewLinkProps) {
    try {
      const host = window.location.host
      const { data } = await createLink({
        urlOriginal: newLinkFormData.urlOriginal,
        urlShortened: `${host}/${newLinkFormData.urlShortened}`,
      })
      const newLink = data

      setLinks(links => [newLink, ...links])
      toast.success('Link criado com sucesso')
      reset()
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          toast.error(error.response.data.errors[0].name, {
            description: error.response.data.errors[0].error,
          })
        }
        if (error.response?.status === 409) {
          toast.error(error.response.data.message)
        }
      } else {
        toast.error('Erro ao criar link')
      }
    }
  }

  return {
    errors,
    isSubmitting,
    register,
    handleSubmit: handleSubmit(handleCreateNewLink),
  }
}
