import React, { useMemo } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { createRouter } from './router'
import setupLocatorUI from '@locator/runtime'
import { isDevEnvironment } from '@src/utils/isDevEnvironment'
import { ThemeProvider } from '@src/components/Shared/ThemeProvider'
import { Toaster } from '@components/ui/sonner'

export default function App() {
  if (isDevEnvironment) {
    setupLocatorUI()
  }

  const queryClient = useMemo(() => new QueryClient({}), [])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <RouterProvider router={createRouter()} />
        <Toaster />
        {isDevEnvironment && <ReactQueryDevtools />}
      </ThemeProvider>
    </QueryClientProvider>
  )
}
