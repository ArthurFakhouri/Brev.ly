import type { LinkProps } from "@/types/links";
import { motion } from "motion/react";
import { DownloadCSVButton } from "./download-csv-button";
import { EmptyListLinks } from "./empty-list-links";
import { ListLinks } from "./list-links";
import { Box } from "./ui/box";

type MyLinksProps = {
  listLinks: LinkProps[]
  isLoading: boolean
}

export function MyLinks({
  listLinks,
  isLoading,
}: MyLinksProps) {

  return (
    <Box className="relative flex-1 max-w-[380px] overflow-hidden w-full gap-4 md:gap-5 md:max-w-full">
      {isLoading && <motion.div
        className="absolute left-0 -translate-x-[150%] top-0 w-[30%] bg-blue-base h-0.5"
        animate={{ transform: 'translateX(500%)' }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: [.89, .18, .7, .73]
        }}
      />
      }
      <div className="w-full flex items-center justify-between">
        <h2 className="text-gray-600 font-bold text-lg leading-6">Meus links</h2>
        <DownloadCSVButton />
      </div>
      <div
        className="border-t w-full pr-2 max-h-[348px] overflow-x-hidden overflow-y-auto scroll border-t-gray-200 md:max-h-[500px] [&>div]:pr-4"
      >
        {listLinks.length !== 0 && <ListLinks listLinks={listLinks} />}
        {listLinks.length === 0 && <EmptyListLinks />}
      </div>
    </Box>
  )
}