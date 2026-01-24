import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './route/Route.jsx'
import Authprovider from './Context/AuthProvider.jsx'
import { ThemeProvider } from './Context/ThemeContext.jsx'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'react-toastify/dist/ReactToastify.css'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Authprovider>
          <RouterProvider router={router} />
          <ToastContainer 
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            toastClassName="!bg-base-100 !text-base-content"
            bodyClassName="!text-base-content"
          />
        </Authprovider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

createRoot(document.getElementById('root')).render(<App />)
