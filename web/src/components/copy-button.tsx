import { useCopyButton } from "@/hooks/useCopyButton";
import { Check, Copy } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "./ui/Button";
import { Popover } from "./ui/popover";


type CopyButtonProps = {
  contentToCopy: string
}

export function CopyButton({
  contentToCopy,
}: CopyButtonProps) {

  const {
    copied,
    handleCopyLink,
    handleCopyBtnMouseLeave,
  } = useCopyButton()

  return (
    <Popover
      asChild
      open={!!copied}
      trigger={
        <Button
          variant="secondary"
          className="relative overflow-hidden"
          onClick={() => handleCopyLink(contentToCopy)}
          onMouseLeave={handleCopyBtnMouseLeave}
          icon
        >
          <AnimatePresence>
            {contentToCopy === copied && (
              <motion.span
                className="absolute left-0 top-0 rotate-0 -translate-[12%] rounded-full w-[130%] aspect-square bg-green-base flex justify-center items-center"
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: {
                    duration: .3,
                    ease: [.33, -.25, .33, 1.25],
                  }
                }}
                exit={{ scale: 0, opacity: 0 }}
              >
                <Check weight="bold" size={16} className="text-white" />
              </motion.span>
            )}
            {contentToCopy !== copied && (
              <Copy size={16} className="text-gray-600" />
            )}
          </AnimatePresence>
        </Button>
      }
      content="Link copiado!"
    />
  )
}