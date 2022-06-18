import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from 'react-redux'
function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore()

  return (
    /* 
    // @ts-ignore */
    <PersistGate persistor={store.__persistor} loading={null}>
      <Component {...pageProps} />
    </PersistGate>
  )
}

export default wrapper.withRedux(MyApp)
