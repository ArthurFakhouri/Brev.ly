import type { JSX } from "react";
import { twMerge } from "tailwind-merge";

type BoxProps<Tag extends keyof JSX.IntrinsicElements = 'div'> = {
  as?: Tag
} & JSX.IntrinsicElements[Tag]

export function Box({
  as = "div",
  className,
  ...props
}: BoxProps) {
  const BoxComponent = as

  return <BoxComponent className={twMerge("bg-gray-100 flex flex-col gap-4 rounded-lg p-6", className)} {...props} />
}