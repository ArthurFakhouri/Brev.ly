import { DownloadSimple } from "@phosphor-icons/react";
import { Button } from "./Button";
import { Box } from "./box";
import { EmptyListLinks } from "./empty-list-links";
import { ListLinks } from "./list-links";

type LinkProps = {
  linkOriginal: string
  linkShortened: string
  numberOfAccess: number
}

type MyLinksProps = {
  listLinks: LinkProps[]
}

export function MyLinks({
  listLinks,
}: MyLinksProps) {
  return (
    <Box className="flex-1 max-w-[380px] w-full gap-4 md:gap-5 md:max-w-full">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-gray-600 font-bold text-lg leading-6">Meus links</h2>
        <Button variant="secondary">
          <DownloadSimple size={16} className="text-gray-600" />
          Baixar CSV
        </Button>
      </div>
      <div className="border-t border-t-gray-200">
        {listLinks.length === 0 && <EmptyListLinks />}
        {listLinks.length !== 0 && <ListLinks listLinks={listLinks} />}
      </div>
    </Box>
  )
}