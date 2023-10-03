import { FlashbarProps } from '@cloudscape-design/components'
import { atom, useAtom } from 'jotai'
import { useRef } from 'react'

export interface Message extends FlashbarProps.MessageDefinition {
  id: string
}

const notificationStore = atom<Message[]>([])

export const useNotificationStore = () => useAtom(notificationStore)
export const useNotification = () => {
  const [items, setItems] = useNotificationStore()
  const timer = useRef<number | NodeJS.Timeout | null>(null)

  return (msg: Message, expireAfter = 5000) => {
    if (items.find((item) => item.id === msg.id)) return

    setItems([...items, msg])
    if (expireAfter > 0) {
      if (timer.current != null) clearTimeout(timer.current)
      timer.current = setTimeout(() => setItems([]), expireAfter)
    }
  }
}
