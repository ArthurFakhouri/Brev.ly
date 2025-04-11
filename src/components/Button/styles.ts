import { tv } from 'tailwind-variants'

export const buttonVariants = tv({
  base: 'flex text-sm font-semibold justify-center items-center hover:enabled:cursor-pointer transition-colors disabled:opacity-50 disabled:hover:cursor-not-allowed',
  variants: {
    variant: {
      primary:
        'px-5 text-white h-12 bg-blue-base hover:enabled:bg-blue-dark rounded-lg',
      secondary:
        'px-2 gap-1.5 bg-gray-200 h-8 border text-gray-500 border-gray-200 rounded-sm hover:enabled:border-blue-base',
    },
    icon: {
      false: '',
      true: 'px-0 size-8',
    },
  },
  defaultVariants: {
    variant: 'primary',
    type: false,
  },
})
