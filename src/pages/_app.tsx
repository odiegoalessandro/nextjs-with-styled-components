import { ThemeProvider } from "styled-components"
import { ThemeContext } from "../contexts/theme"
import { useMode } from "../hooks/useMode"
import GlobalStyles from "../lib/globalStyles"
import { dark, light } from "../lib/theme"

function MyApp({ Component, pageProps }) {
  const { theme, toggleTheme, isComponentMounted } = useMode()

  if (!isComponentMounted) {
    return <div />
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default MyApp
