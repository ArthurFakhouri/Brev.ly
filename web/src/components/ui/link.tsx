import { type LinkProps, Link as LinkReactRouter } from 'react-router'
import { twMerge } from 'tailwind-merge'


export function Link({
  className,
  ...props
}: LinkProps) {
  return (
    <LinkReactRouter
      className={
        twMerge(
          'text-blue-base underline font-semibold text-sm decoration-blue-base transition-colors hover:text-blue-dark',
          className,
        )
      }
      {...props}
    />
  )
}