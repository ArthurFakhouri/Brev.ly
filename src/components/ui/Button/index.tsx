import { type ComponentProps, forwardRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { buttonVariants } from "./styles";

type ButtonProps = ComponentProps<'button'>
  & VariantProps<typeof buttonVariants>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant,
  icon,
  className,
  ...props
}, ref) => {

  return (
    <button ref={ref} type="button" {...props} className={buttonVariants({ variant, icon, className })} />
  )
})