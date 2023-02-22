import Head from 'next/head'
import '../styles/globals.css'

import { useCounter } from 'src/hooks/useCounter'
import { useInputArray } from 'src/hooks/useInputArray'
import { useBgLightBlue } from 'src/hooks/useBgLightBlue'

function MyApp({ Component, pageProps }) {

  //カスタムフックの呼び出し
  const counter = useCounter();
  const inputArray = useInputArray();

  useBgLightBlue();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray} />
    </>
    
  )
}

export default MyApp