import { useDownloadCSVButton } from "@/hooks/useDownloadCSVButton"
import { DownloadSimple } from "@phosphor-icons/react"
import { motion } from "motion/react"
import { Button } from "./ui/Button"

export function DownloadCSVButton() {

  const {
    buttonRef,
    progress,
    handleDonwloadCSV,
  } = useDownloadCSVButton()

  return (
    <Button
      ref={buttonRef}
      variant="secondary"
      className="relative overflow-hidden"
      onClick={handleDonwloadCSV}
      disabled={progress !== null}
    >
      {progress === null && (
        <>
          <DownloadSimple size={16} className="text-gray-600" />
          Baixar CSV
        </>
      )}
      {progress !== null && (
        <>
          <motion.div className="absolute inset-0 flex items-center justify-center bg-blue-base overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: progress === null ? 0 : `${progress}%` }}
          >
            <span
              className="absolute inset-0 h-full flex items-center justify-center gap-1 text-white"
              style={{ width: buttonRef.current?.clientWidth ?? 'auto' }}
            >
              <DownloadSimple size={16} />
              {progress?.toFixed(2)}%
            </span>
          </motion.div>
          <DownloadSimple size={16} className="text-gray-600" />
          {progress.toFixed(2)}%
        </>
      )}
    </Button>
  )
}