import { exportLinks } from '@/api/exportLinks'
import { useRef, useState } from 'react'

export function useDownloadCSVButton() {
  const [progress, setProgress] = useState<number | null>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  async function handleDonwloadCSV() {
    async function getStreamCSV() {
      const response = await exportLinks()

      const reader = response.body!.getReader()
      const decoder = new TextDecoder('utf-8')
      let done = false
      let url = ''

      while (!done) {
        const { value, done: streamDone } = await reader.read()
        done = streamDone
        if (value) {
          const chunkDecoded = decoder.decode(value, { stream: true })
          const chunks = chunkDecoded.split('\n')

          chunks.map(chunk => {
            if (chunk !== '') {
              const csvData = JSON.parse(chunk)
              setProgress(csvData.progress)

              if (csvData.reportUrl !== '') {
                url = csvData.reportUrl
              }
            }
          })
        }
      }
      const anchor = document.createElement('a')
      anchor.href = url

      anchor.click()
      anchor.remove()
      setProgress(null)
    }

    getStreamCSV()
  }

  return {
    progress,
    buttonRef,
    handleDonwloadCSV,
  }
}
