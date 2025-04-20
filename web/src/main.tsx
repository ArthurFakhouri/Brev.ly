import { createRoot } from 'react-dom/client'
import './global.css'
import { BrowserRouter } from 'react-router'
import { Toaster } from './components/ui/toaster.tsx'
import { RoutesApp } from './routes.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <Toaster />
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  </>
)
