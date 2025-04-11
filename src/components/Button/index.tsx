import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { buttonVariants } from "./styles";

type ButtonProps = ComponentProps<'button'>
  & VariantProps<typeof buttonVariants>

export function Button({
  variant,
  icon,
  className,
  ...props
}: ButtonProps) {

  return (
    <button className={buttonVariants({ variant, icon, className })} {...props} />
  )
}