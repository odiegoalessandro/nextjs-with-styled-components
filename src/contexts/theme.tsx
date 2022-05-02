import { createContext, ReactNode, useState } from "react"

interface ThemeContextType {
  theme: string
  toggleTheme: () => void
}

interface ThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextType)
