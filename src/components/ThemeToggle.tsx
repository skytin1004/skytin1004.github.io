import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.75v2.5M12 18.75v2.5M4.75 4.75l1.75 1.75M17.5 17.5l1.75 1.75M2.75 12h2.5M18.75 12h2.5M4.75 19.25 6.5 17.5M17.5 6.5l1.75-1.75" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.25 14.2A7.6 7.6 0 0 1 9.8 3.75 8.25 8.25 0 1 0 20.25 14.2Z" />
    </svg>
  )
}

function getPreferredTheme(): Theme {
  if (typeof window === 'undefined') return 'light'

  const saved = window.localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    setTheme(getPreferredTheme())
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      aria-label={isDark ? 'Use light theme' : 'Use dark theme'}
      title={isDark ? 'Use light theme' : 'Use dark theme'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-white text-text-secondary transition-colors hover:border-brand/50 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white dark:focus-visible:ring-offset-slate-950"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
