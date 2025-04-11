import { Warning } from "@phosphor-icons/react";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = {
  label?: string
  error?: string
} & ComponentProps<'input'>

export function Input({
  label = "",
  error = "",
  className,
  ...props
}: InputProps) {

  return (
    <label data-error={!!error} className="group flex flex-col text-gray-500 gap-2 text-[10px] focus-within:text-blue-base focus-within:font-bold data-[error=true]:text-danger">
      {label.toUpperCase()}
      <input className={twMerge("transition-colors outline-0 px-4 h-12 text-gray-600 text-sm font-normal border-[1.5px] border-gray-300 placeholder-gray-400 rounded-lg focus-within:group-data-[error=false]:border-blue-base group-data-[error=true]:border-danger", className)} {...props} />
      {!!error && (
        <span className="text-xs flex font-normal items-center gap-2 text-gray-500">
          <Warning size={16} className="text-danger" />
          {error}
        </span>
      )}
    </label>
  )
}