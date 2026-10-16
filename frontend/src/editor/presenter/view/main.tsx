/** Entry point of `presenter-view.html`, the page "Present with notes" opens in a second window. */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter'
import '@fontsource-variable/plus-jakarta-sans'
import '@bcgov/bc-sans/css/BC_Sans.css'
import '@/styles/tokens.css'
import '@/styles/global.css'
import { PresenterView } from './PresenterView'

const session = new URLSearchParams(location.search).get('session')

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <PresenterView session={session} />
  </StrictMode>,
)
