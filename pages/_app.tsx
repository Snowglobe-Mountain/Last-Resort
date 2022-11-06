import '../styles/globals.css'
import type { AppProps } from 'next/app'

const App: JSX.Element = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
