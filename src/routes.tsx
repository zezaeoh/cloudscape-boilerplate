import { FeatureDefinition } from '@/core/models/feature'
import { TestPage } from '@/core/pages/test-page'

export const featureDefinitions: FeatureDefinition[] = [
  {
    category: 'Service',
    feature: {
      name: 'Service Catalog',
      breadcrumb: 'Services',
      path: '/services',
      children: [
        {
          index: true,
          name: 'List',
          contentType: 'table',
          element: <TestPage title="Service Catalog" />,
        },
        {
          name: 'Details',
          breadcrumb: ({ serviceId }) => serviceId ?? '',
          path: ':serviceId',
          hideOnNavigation: true,
          element: <TestPage title="Service Catalog Detail" />,
        },
        {
          name: 'Create',
          breadcrumb: 'Create',
          path: 'create',
          element: <TestPage title="Service Catalog Create" />,
        },
      ],
    },
  },
  {
    category: 'Infrastructure',
    feature: {
      name: 'Query Runner',
      breadcrumb: 'Queries',
      path: '/queries',
      element: <TestPage title="Query Runner" />,
    },
  },
]
