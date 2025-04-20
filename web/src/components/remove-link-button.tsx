import { useRemoveLinkButton } from '@/hooks/useRemoveLinkButton';
import { Spinner, Trash, XCircle } from '@phosphor-icons/react';
import * as DialogRadix from '@radix-ui/react-dialog'
import { Button } from './ui/Button';
import { Dialog } from "./ui/dialog";

type RemoveLinkButtonProps = {
  removeFn: () => Promise<void>
}

export function RemoveLinkButton({
  removeFn,
}: RemoveLinkButtonProps) {

  const {
    open,
    isLoading,
    setOpen,
    handleRemoveLink,
  } = useRemoveLinkButton({
    removeFn,
  })

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      asChild
      trigger={
        <Button variant="secondary" icon>
          <Trash size={16} className="text-gray-600" />
        </Button>
      }
      content={
        <div className="flex flex-col gap-8">
          <div className='flex items-center justify-center flex-col gap-2'>
            <XCircle size={48} weight='fill' className="text-danger" />
            <div className='flex flex-col items-center gap-1'>
              <DialogRadix.Title className="text-gray-500 text-xl font-bold">
                Excluir link
              </DialogRadix.Title>
              <DialogRadix.Description className="text-gray-400 text-sm text-center">
                Você tem certeza que deseja excluir este link?
              </DialogRadix.Description>
            </div>
          </div>
          <div className="flex w-full items-center justify-between gap-4 [&>button]:flex-1">
            <DialogRadix.Close asChild>
              <Button variant="secondary" className='flex h-10 max-h-full'>
                Cancelar
              </Button>
            </DialogRadix.Close>
            <Button type='submit' className='h-10 gap-1' disabled={isLoading} onClick={handleRemoveLink}>
              {isLoading && (
                <>
                  <Spinner size={16} className='animate-spin' />
                  Excluindo...
                </>
              )}
              {!isLoading && 'Excluir'}
            </Button>
          </div>
        </div>
      }
    />
  )
}