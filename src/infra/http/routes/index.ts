import { createLinkRoute } from './create-link'
import { exportLinksToCSVRoute } from './export-links-to-csv'
import { getLinkByShortenedURLRoute } from './get-link-by-shortened-url'
import { getLinksRoute } from './get-links'
import { incrementAccessLinkByShortenedURLRoute } from './increment-access-link-by-shortened-url'
import { removeLinkRoute } from './remove-link'

export const routes = {
  getLinksRoute,
  createLinkRoute,
  removeLinkRoute,
  exportLinksToCSVRoute,
  getLinkByShortenedURLRoute,
  incrementAccessLinkByShortenedURLRoute,
}
