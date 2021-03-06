import { useContext } from "react"
import { ThemeContext } from "../contexts/theme"

export function useTheme() {
  const theme = useContext(ThemeContext)

  return theme
}
