import {
  BreadcrumbGroup as PolarisBreadcrumbGroup,
  BreadcrumbGroupProps as PolarisBreadcrumbGroupProps,
} from '@cloudscape-design/components'
import { Params, useNavigate, useParams } from 'react-router-dom'

import { onFollow } from './on-follow'

const HOME_BREADCRUMB = {
  text: 'Portal',
  href: '/',
} as PolarisBreadcrumbGroupProps.Item

export type BreadcrumbFn = (params: Readonly<Params>) => string

export interface BreadcrumbGroupItem {
  text: string | BreadcrumbFn
  href: string
}

export interface BreadcrumbGroupProps
  extends Omit<PolarisBreadcrumbGroupProps, 'items'> {
  items: Readonly<BreadcrumbGroupItem[]>
}

/**
 * A component for displaying a group of breadcrumbs, using the Cloudscape (AWS Polaris) library
 * to prevent full page reloads when the breadcrumbs are clicked.
 *
 * @param props - the component props
 * @param props.onFollow - an optional event handler for the "follow" event, called when a breadcrumb is clicked. If not provided, an event handler will be used that prevents full page reloads.
 * @returns a component for displaying a group of breadcrumbs
 */
export const BreadcrumbGroup = (props: BreadcrumbGroupProps) => {
  const navigate = useNavigate()
  const params = useParams()
  const items: PolarisBreadcrumbGroupProps.Item[] = [HOME_BREADCRUMB]
  props.items.forEach((item) => {
    if (typeof item.text === 'string') {
      items.push(item as PolarisBreadcrumbGroupProps.Item)
      return
    }
    items.push({
      text: item.text(params),
      href: item.href,
    })
  })
  return (
    <PolarisBreadcrumbGroup
      {...props}
      items={items}
      onFollow={props.onFollow ?? onFollow(navigate)}
    />
  )
}
