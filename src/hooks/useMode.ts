import { useEffect, useState } from "react"

interface useModeProps {
  theme: "dark" | "light"
  toggleTheme: () => void
  isComponentMounted: boolean
}

export const useMode: () => useModeProps = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [isComponentMounted, setIsComponentMounted] = useState(false)

  const setMode = (mode: "light" | "dark") => {
    window.localStorage.setItem("theme", mode)
    setTheme(mode)
  }

  function toggleTheme() {
    theme === "light" ? setMode("dark") : setMode("light")
  }

  useEffect(() => {
    const localTheme: any = window.localStorage.getItem("theme")

    localTheme ? setTheme(localTheme) : setMode("light")

    setIsComponentMounted(true)
  }, [])

  return { theme, toggleTheme, isComponentMounted }
}
