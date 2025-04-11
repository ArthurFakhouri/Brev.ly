import { Copy, Trash } from "@phosphor-icons/react"
import { Button } from "./Button"

type LinkProps = {
  linkOriginal: string
  linkShortened: string
  numberOfAccess: number
}

type ListLinksProps = {
  listLinks: LinkProps[]
}

export function ListLinks({
  listLinks,
}: ListLinksProps) {
  return (
    <ul className="flex flex-col w-full [&>li+li]:border-t-gray-200">
      {listLinks.map(link => {
        return (
          <li key={link.linkShortened} className="flex gap-4 border-t border-t-transparent w-full items-center py-3 md:gap-5 md:py-4">
            <div className="flex min-w-[50px] flex-1 flex-col gap-1">
              <strong className="text-blue-base text-sm font-semibold line-clamp-1 leading-[1.125rem]">
                {link.linkShortened}
              </strong>
              <span className="text-gray-500 text-xs line-clamp-1">
                {link.linkOriginal}
              </span>
            </div>
            <span className="text-gray-500 text-xs">{link.numberOfAccess.toString().padStart(2, '0')} acessos</span>
            <div className="flex gap-1">
              <Button variant="secondary" icon>
                <Copy size={16} className="text-gray-600" />
              </Button>
              <Button variant="secondary" icon>
                <Trash size={16} className="text-gray-600" />
              </Button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}