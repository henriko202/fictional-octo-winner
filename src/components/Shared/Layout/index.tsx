import React from 'react'
import { Header } from '@src/components/Header'

export const getDefaultLayout = (page: React.ReactElement) => {
  return (
    <div className="h-min-screen">
      <Header />
      {page}
    </div>
  )
}
