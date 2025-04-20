export async function exportLinks() {
  return await fetch('http://localhost:3333/links/exports', { method: 'POST' })
}
