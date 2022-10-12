import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { LayoutDashboard } from '../components/LayoutDashboard'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      {router.pathname !== `/` && router.pathname !== `/404` ? (
        <LayoutDashboard>
          <Component {...pageProps} />
        </LayoutDashboard>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}

export default MyApp
