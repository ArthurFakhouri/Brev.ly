import * as DialogRadix from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'motion/react'
import type { ReactNode } from 'react'

type DialogProps = {
  asChild?: boolean
  trigger: ReactNode
  content: ReactNode
} & DialogRadix.DialogProps

export function Dialog({
  content,
  trigger,
  asChild = false,
  ...props
}: DialogProps) {
  return (
    <DialogRadix.Root {...props}>
      <DialogRadix.Trigger asChild={asChild}>
        {trigger}
      </DialogRadix.Trigger>
      <DialogRadix.Portal>
        <DialogRadix.Overlay className='fixed inset-0'>
          <AnimatePresence>
            <motion.div className='flex size-full bg-[#000000a6]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}

            />
          </AnimatePresence>
        </DialogRadix.Overlay>
        <DialogRadix.Content className='fixed left-1/2 top-1/2 -translate-1/2 min-w-[300px] bg-white h-fit p-4 rounded-lg shadow-lg'>
          {content}
        </DialogRadix.Content>
      </DialogRadix.Portal>
    </DialogRadix.Root>
  )
}