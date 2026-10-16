/** Entry point of `presenter-view.html`, the page "Present with notes" opens in a second window. */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter'
import '@fontsource-variable/plus-jakarta-sans'
import '@fontsource-variable/bricolage-grotesque/opsz.css'
import '@fontsource-variable/ibm-plex-sans'
import '@fontsource-variable/ibm-plex-sans/wght-italic.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import '@/styles/tokens.css'
import '@/styles/global.css'
import { PresenterView } from './PresenterView'

const session = new URLSearchParams(location.search).get('session')

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <PresenterView session={session} />
  </StrictMode>,
)
