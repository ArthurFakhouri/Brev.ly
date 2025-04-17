export async function getLinks() {
  return await fetch('http://localhost:3333/links')
}
