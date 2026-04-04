import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


// Pages
import Dashboard from './pages/Dashboard'

const routes = createBrowserRouter([
  {path: "/", element: <Dashboard/>},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={routes} />
  </StrictMode>,
)
