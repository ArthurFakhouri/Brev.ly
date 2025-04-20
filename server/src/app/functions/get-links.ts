import { db, pg } from '@/postgres'
import { schema } from '@/schema'
import { desc } from 'drizzle-orm'

export type LinkProps = {
  url_shortened: string
  url_original: string
  created_at: Date
}

export function getLinksFn(dataPerChunk = 1) {
  const { links } = schema
  const { sql, params } = db.query.links
    .findMany({ orderBy: [desc(links.createdAt)] })
    .toSQL()

  const cursor = pg
    .unsafe(sql, params as string[])
    .cursor(dataPerChunk) as AsyncIterable<LinkProps[]>

  return cursor
}
