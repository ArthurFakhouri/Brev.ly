import { type LinkStoreProps, useLinkStore } from "@/stores/link"
import { type ReactNode, createContext } from "react"

type LinkContextProviderProps = {
  children: ReactNode
}

export const LinkContext = createContext({} as LinkStoreProps)

export function LinkContextProvider({
  children,
}: LinkContextProviderProps) {

  const linkStoreData = useLinkStore()

  return (

    <LinkContext.Provider value={linkStoreData} >
      {children}
    </LinkContext.Provider>
  )
}