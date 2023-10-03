import { Flashbar } from '@cloudscape-design/components'

import { useNotificationStore } from '@/core/hooks/notification'

export const Notifications = () => {
  const [items] = useNotificationStore()
  return <Flashbar items={items} />
}
