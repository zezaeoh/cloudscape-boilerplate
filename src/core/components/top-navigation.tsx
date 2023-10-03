import {
  TopNavigation as PolarisTopNavigation,
  ButtonDropdownProps,
} from '@cloudscape-design/components'

import logo from '@/assets/logo.svg'

const profileActions: ButtonDropdownProps.Items = [
  { id: 'profile', text: 'Profile' },
  { id: 'preferences', text: 'Preferences' },
  { id: 'security', text: 'Security' },
  {
    id: 'support-group',
    text: 'Support',
    items: [
      {
        id: 'documentation',
        text: 'Documentation',
        href: '#',
        external: true,
        externalIconAriaLabel: ' (opens in new tab)',
      },
      {
        id: 'feedback',
        text: 'Feedback',
        href: '#',
        external: true,
        externalIconAriaLabel: ' (opens in new tab)',
      },
      { id: 'support', text: 'Customer support' },
    ],
  },
  { id: 'signout', text: 'Sign out' },
]
export const TopNavigation = () => {
  return (
    <PolarisTopNavigation
      identity={{
        href: '#',
        title: 'Developer portal',
        logo: { src: logo, alt: 'Developer portal logo' },
      }}
      utilities={[
        {
          type: 'button',
          iconName: 'notification',
          ariaLabel: 'Notifications',
          badge: true,
          disableUtilityCollapse: true,
        },
        {
          type: 'button',
          iconName: 'settings',
          title: 'Settings',
          ariaLabel: 'Settings',
        },
        {
          type: 'menu-dropdown',
          text: 'Customer name',
          description: 'customer@example.com',
          iconName: 'user-profile',
          items: profileActions,
        },
      ]}
    />
  )
}
