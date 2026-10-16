import '@fontsource-variable/inter'
import '@fontsource-variable/plus-jakarta-sans'
import '@fontsource-variable/bricolage-grotesque/opsz.css'
import '@fontsource-variable/ibm-plex-sans'
import '@fontsource-variable/ibm-plex-sans/wght-italic.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tokens.css'
import './styles/global.css'
import App from './App'

const root = document.getElementById('root')
if (!root) throw new Error('Missing #root element')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
