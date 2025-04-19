import { AxiosError } from 'axios'
import { useState } from 'react'
import { toast } from 'sonner'

type UseRemoveLinkButtonProps = {
  removeFn: () => Promise<void>
}

export function useRemoveLinkButton({ removeFn }: UseRemoveLinkButtonProps) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  async function handleRemoveLink() {
    try {
      setIsLoading(true)
      await removeFn()
      toast.success('Link removido com sucesso!')
      setOpen(false)
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.status === 400) {
          toast.error(error.response?.data[0].name, {
            description: error.response?.data[0].error,
          })
        }
        if (error.status === 404) {
          toast.error('Não encontrado!', {
            description: error.response?.data.message,
          })
        }
      }
    } finally {
      setIsLoading(false)
    }
  }

  return {
    open,
    isLoading,
    setOpen,
    handleRemoveLink,
  }
}
