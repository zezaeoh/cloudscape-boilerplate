import { AppLayout, SideNavigationProps } from '@cloudscape-design/components'
import * as React from 'react'
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import {
  Notifications,
  TopNavigation,
  SideNavigation,
  BreadcrumbGroup,
  BreadcrumbGroupItem,
} from '@/core/components'
import { Feature, FeatureDefinition } from '@/core/models/feature'
import { Page404 } from '@/core/pages/404'
import { parseSideNavigationItem } from '@/core/utils/feature'
import { featureDefinitions } from '@/routes'

const extraRoutes: RouteObject[] = [
  {
    path: '*',
    element: <Page404 />,
  },
]

const createFeatureRoutes = (fds: FeatureDefinition[]) => {
  const sideNavigationSections: Record<
    string,
    SideNavigationProps.SectionGroup
  > = {}
  fds.forEach((item) => {
    if (!(item.category in sideNavigationSections)) {
      sideNavigationSections[item.category] = {
        type: 'section-group',
        title: item.category,
        items: [],
      }
    }
    const navigationItem = parseSideNavigationItem(item.feature)
    if (navigationItem != null) {
      sideNavigationSections[item.category].items = [
        ...sideNavigationSections[item.category].items,
        navigationItem,
      ]
    }
  })
  const convertToRouteObject = (
    feat: Feature,
    pathPrefix = '',
    breadcrumbs: BreadcrumbGroupItem[] = [],
  ): RouteObject => {
    const href = [pathPrefix, feat.path].filter(Boolean).join('/')
    const breadcrumbItems =
      feat.breadcrumb != null
        ? [...breadcrumbs, { text: feat.breadcrumb, href }]
        : breadcrumbs
    const element: React.ReactNode | undefined =
      feat.element != null ? (
        <>
          <TopNavigation />
          <AppLayout
            content={feat.element}
            contentType={feat.contentType}
            notifications={<Notifications />}
            breadcrumbs={<BreadcrumbGroup items={breadcrumbItems} />}
            navigation={
              <SideNavigation
                activeHref={feat.hideOnNavigation ? pathPrefix : href}
                items={Object.values(sideNavigationSections)}
              />
            }
            toolsHide
          />
        </>
      ) : undefined
    if (feat.index) {
      return { ...feat, element }
    }
    return {
      ...feat,
      element,
      children: feat.children?.map((item) =>
        convertToRouteObject(item as Feature, href, breadcrumbItems),
      ),
    }
  }
  return fds.map((item) => convertToRouteObject(item.feature))
}

export const App = () => {
  const featureRoutes = createFeatureRoutes(featureDefinitions)
  return (
    <RouterProvider
      router={createBrowserRouter([...featureRoutes, ...extraRoutes])}
    />
  )
}
