import * as PopoverRadix from '@radix-ui/react-popover'
import { motion } from 'motion/react'
import type { ComponentProps, ReactNode } from 'react'

type PopoverProps = {
  asChild?: boolean
  arrow?: boolean
  trigger: ReactNode
  content: ReactNode
  contentProps?: PopoverRadix.PopoverContentProps
} & ComponentProps<typeof PopoverRadix.Root>

export function Popover({
  asChild = false,
  trigger,
  content,
  contentProps,
  arrow = true,
  ...props
}: PopoverProps) {

  const side = contentProps?.side ?? 'top'
  let transform = 'translateY(2px)'
  let transformAnimate = 'translateY(0px)'

  if (side === 'bottom') {
    transform = 'translateX(-2px)'
    transformAnimate = 'translateX(0px)'
  }
  if (side === 'left') {
    transform = 'translateX(2px)'
    transformAnimate = 'translateX(0px)'
  }
  if (side === 'right') {
    transform = 'transformX(-2px)'
    transformAnimate = 'transformX(0px)'
  }

  return (
    <PopoverRadix.Root {...props}>
      <PopoverRadix.Trigger asChild={asChild}>
        {trigger}
      </PopoverRadix.Trigger>
      <PopoverRadix.Portal>
        <PopoverRadix.Content
          side="top"
          sideOffset={8}
          {...contentProps}
        >
          <motion.div
            className="bg-gray-600 opacity-100 text-white shadow-2xl px-3 py-2 rounded-md"
            initial={{ opacity: 0, transform }}
            animate={{ opacity: 1, transform: transformAnimate }}
          >

            {content}
            {arrow && <PopoverRadix.Arrow className="fill-gray-600 -mt-[1px]" />}
          </motion.div>
        </PopoverRadix.Content>
      </PopoverRadix.Portal>
    </PopoverRadix.Root>
  )
}