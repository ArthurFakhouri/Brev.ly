import { useState } from 'react'

export function useLinkImage() {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  return {
    hasError,
    isLoading,
    setHasError,
    setIsLoading,
  }
}
