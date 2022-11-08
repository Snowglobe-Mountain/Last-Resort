import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

const App: JSX.Element = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider enableSystem attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
