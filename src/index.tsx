import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import App from './views/App'
import { ContextProvider } from './context'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
)
