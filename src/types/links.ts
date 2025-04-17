export type LinkProps = {
  urlShortened: string
  urlOriginal: string
  numberOfAccess: number
  createdAt: string
}

export type GetLinkResponse = {
  urlOriginal: string
}

export type IncrementAccessLinkResponse = {
  numberOfAccess: number
}
