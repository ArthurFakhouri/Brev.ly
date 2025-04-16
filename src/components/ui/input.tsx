import { Warning } from "@phosphor-icons/react";
import type { ChangeEvent, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = {
  label?: string
  error?: string
  prefix?: string
  mask?: (text: string) => string
} & ComponentProps<'input'>

export function Input({
  label = "",
  error = "",
  prefix = "",
  className,
  mask,
  ...props
}: InputProps) {

  function handleChangeInputValue(event: ChangeEvent<HTMLInputElement>) {
    if (mask) {
      event.target.value = mask(event.target.value)
    }
    if (props.onChange)
      props.onChange(event)
  }

  return (
    <label data-error={!!error} className="group flex flex-col text-gray-500 gap-2 text-[10px] focus-within:text-blue-base focus-within:font-bold data-[error=true]:text-danger">
      {label.toUpperCase()}
      <div className="flex w-full items-center px-4 h-12 border-[1.5px] border-gray-300 transition-colors rounded-lg focus-within:group-data-[error=false]:border-blue-base group-data-[error=true]:border-danger">
        {prefix && <span className="text-gray-500 text-sm font-normal">{prefix}</span>}
        <input
          className={
            twMerge("flex-1 transition-colors outline-0 text-gray-600 text-sm font-normal placeholder-gray-400", className)
          }
          {...props}
          onChange={handleChangeInputValue}
        />
      </div>
      {!!error && (
        <span className="text-xs flex font-normal items-center gap-2 text-gray-500">
          <Warning size={16} className="text-danger" />
          {error}
        </span>
      )}
    </label>
  )
}