import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routs/routs'
import { RouterProvider } from 'react-router'
import FriendContactProvider from './context/FriendContactProvider'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendContactProvider>
      <RouterProvider router={router} />
    </FriendContactProvider>
  </StrictMode>,
)
