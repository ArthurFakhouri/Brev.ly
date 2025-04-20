export function urlMask(text: string) {
  return text.replace(/[^a-z0-9\-]/gi, '')
}
