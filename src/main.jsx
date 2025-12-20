import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './route/Route.jsx'
import Authprovider from './Context/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <div>
    <QueryClientProvider client={queryClient} >
      <Authprovider>
        <RouterProvider router={router} />
        <ToastContainer />
      </Authprovider>
    </QueryClientProvider>
  </div>,
)
