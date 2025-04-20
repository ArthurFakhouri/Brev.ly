import { Link } from "@phosphor-icons/react";

export function EmptyListLinks() {
  return (
    <div className="flex pt-4 pb-6 flex-col gap-3 justify-center items-center mt-4">
      <Link size={32} className="text-gray-400" />
      <span className="text-[10px] leading-3.5 uppercase text-gray-500">ainda não existem links cadastrados</span>
    </div>
  )
}