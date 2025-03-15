import React from 'react'
import { LanguageSelector } from './LanguageSelector'
import { ModeToggle } from '@src/components/Header/ThemeModeSelector'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <div className="fixed left-0 top-0 flex w-full items-center justify-between border bg-slate-50 bg-opacity-70 px-4 py-4 md:px-12">
      <Link to="/" className="text-xs md:text-base">
        Vite React TS Tailwind Starter
      </Link>
      <div className="flex items-center gap-4">
        <LanguageSelector />
        <ModeToggle />
      </div>
    </div>
  )
}
