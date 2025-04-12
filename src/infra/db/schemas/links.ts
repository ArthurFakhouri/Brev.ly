import { pgTable, text } from 'drizzle-orm/pg-core'

export const links = pgTable('links', {
  urlShortened: text('url_shortened').primaryKey().notNull(),
  urlOriginal: text('url_original').notNull(),
})
