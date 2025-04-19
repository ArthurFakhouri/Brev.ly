import { useLinkImage } from "@/hooks/useLinkImage"
import { CircleNotch, GlobeHemisphereWest } from "@phosphor-icons/react"

type LinkImageProps = {
  link: string
}

export function LinkImage({
  link,
}: LinkImageProps) {

  const {
    hasError,
    isLoading,
    setHasError,
    setIsLoading,
  } = useLinkImage()

  return (
    <>
      {hasError && (
        <GlobeHemisphereWest weight="fill" size={16} className="text-gray-400" />
      )}
      {isLoading && !hasError && (
        <CircleNotch size={16} className="text-gray-400 animate-spin" />
      )}
      {!hasError && (
        <img
          src={`${link}/favicon.ico`}
          data-loading={isLoading}
          className="size-[16px] aspect-square data-[loading=true]:hidden"
          alt="Link favicon"
          onLoad={() => setIsLoading(false)}
          onError={() => setHasError(true)}
        />
      )}
    </>
  )
}