import { SideNavigationProps } from '@cloudscape-design/components'

import { Feature } from '@/core/models/feature'

export const parseSideNavigationItem = (
  feature: Feature,
  pathPrefix = '',
):
  | SideNavigationProps.Link
  | SideNavigationProps.ExpandableLinkGroup
  | undefined => {
  const href = [pathPrefix, feature.path].filter(Boolean).join('/')
  const items = feature.children
    ?.map((item) => parseSideNavigationItem(item as Feature, href))
    .filter(Boolean)
  if (feature.hideOnNavigation) return
  if (feature.index) return
  if (items && items.length > 0) {
    return {
      type: 'expandable-link-group',
      text: feature.name,
      href,
      items,
    } as SideNavigationProps.ExpandableLinkGroup
  }
  return {
    type: 'link',
    text: feature.name,
    href,
  }
}
