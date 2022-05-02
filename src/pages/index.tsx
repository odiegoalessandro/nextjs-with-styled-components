import { useTheme } from "../hooks/useTheme"

export default function Home() {
  const { toggleTheme } = useTheme()

  return (
    <div>
      <h1>hello world</h1>
      <button onClick={toggleTheme}>mudar tema</button>
    </div>
  )
}
