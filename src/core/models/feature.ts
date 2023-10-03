import { AppLayoutProps } from '@cloudscape-design/components'
import {
  IndexRouteObject,
  NonIndexRouteObject,
} from 'react-router/dist/lib/context'

import { BreadcrumbFn } from '@/core/components'

export type Feature = (IndexRouteObject | NonIndexFeature) & {
  name: string
  breadcrumb?: string | BreadcrumbFn
  hideOnNavigation?: boolean
  contentType?: AppLayoutProps.ContentType
}

export interface NonIndexFeature extends NonIndexRouteObject {
  children?: Feature[]
}

export interface FeatureDefinition {
  category: 'Service' | 'Infrastructure'
  feature: Feature
}
