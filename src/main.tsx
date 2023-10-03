import * as React from 'react'
import { createRoot } from 'react-dom/client'
import '@cloudscape-design/global-styles/index.css'

import { App } from '@/app'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
