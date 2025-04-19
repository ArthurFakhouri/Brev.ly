import { useState } from 'react'

export function useCopyButton() {
  const [copied, setCopied] = useState<string | null>(null)

  async function handleCopyLink(url: string) {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(url)
    } catch (err) {}
  }

  function handleCopyBtnMouseLeave() {
    setCopied(null)
  }

  return {
    copied,
    handleCopyLink,
    handleCopyBtnMouseLeave,
  }
}
