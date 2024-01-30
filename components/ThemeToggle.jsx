'use client'

import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return (
    ""
  )

  if (resolvedTheme === 'dark') {
    return <FontAwesomeIcon icon={faMoon} onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    return <FontAwesomeIcon icon={faSun} onClick={() => setTheme('dark')} />
  }
}