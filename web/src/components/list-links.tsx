import { useListLinks } from "@/hooks/useListLinks"
import type { LinkProps } from "@/types/links"
import { AnimatePresence, motion } from 'motion/react'
import { CopyButton } from "./copy-button"
import { LinkImage } from "./link-image"
import { RemoveLinkButton } from "./remove-link-button"

type ListLinksProps = {
  listLinks: LinkProps[]
}

export function ListLinks({
  listLinks,
}: ListLinksProps) {

  const { handleOpenLink, handleRemoveLink } = useListLinks()

  return (
    <motion.ul
      className="flex flex-col items-center w-full [&>li+li]:border-t-gray-200"
      layout
      transition={{
        layout: {
          duration: .3,
          ease: [.33, -.25, .33, 1],
        }
      }}
      initial={{ height: 0 }}
      animate={{
        height: 'auto',
      }}
    >
      <AnimatePresence>
        {listLinks.map(link => {
          return (
            <motion.li
              key={link.urlShortened}
              className="flex gap-4 border-t border-t-transparent max-h-[66px] items-center w-full py-3 md:gap-5 md:py-4 md:max-h-[74px]"
              layout
              transition={{
                layout: {
                  duration: .3,
                  ease: [.33, -.25, .33, 1],
                }
              }}
              initial={{ transform: 'translateY(-50%) scale(0)', height: 0 }}
              animate={{
                transform: 'translateY(0) scale(1)',
                height: '100%',
                transition: {
                  duration: .3,
                  ease: [.33, -.25, .33, 1],
                }
              }}
              exit={{ transform: 'translateY(-50%) scale(0)', height: 0 }}
            >
              <div className="flex min-w-[0px] flex-1  flex-col gap-1">
                <button
                  type="button"
                  onClick={() => handleOpenLink(link.urlShortened)}
                  className="text-blue-base text-left text-sm font-semibold line-clamp-1 leading-[1.125rem] hover:cursor-pointer hover:text-blue-dark"
                >
                  {link.urlShortened}
                </button>
                <span className="flex-1 text-gray-500 text-xs line-clamp-1 flex gap-1">
                  <LinkImage link={link.urlOriginal} />
                  {link.urlOriginal}
                </span>
              </div>
              <span className="text-gray-500 text-xs text-center">
                {link.numberOfAccess === 0 && 'Nenhum acesso'}
                {link.numberOfAccess === 1 && '01 acesso'}
                {link.numberOfAccess > 1 && `${link.numberOfAccess.toString().padStart(2, '0')} acessos`}
              </span>
              <div className="flex gap-1">
                <CopyButton contentToCopy={link.urlShortened} />
                <RemoveLinkButton removeFn={async () => { await handleRemoveLink(link.urlShortened) }} />
              </div>
            </motion.li>
          )
        })}
      </AnimatePresence>
    </motion.ul>
  )
}