import type { AppProps } from 'next/app'
import HeaderTop from '@components/headers/top'
import '@services/language'
import '@styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <HeaderTop />
      <Component {...pageProps} />
    </main>
  )
}
