import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import react-router-dom
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index'

// import react-query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
