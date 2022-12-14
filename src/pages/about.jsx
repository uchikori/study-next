import Head from 'next/head'
import Image from 'next/image'
import styles from 'src/styles/Home.module.css'
import { Header } from 'src/components/Header/index.jsx'
import { Main } from 'src/components/Main/index.jsx'
import { Footer } from 'src/components/Footer/index.jsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header />

      <Main fileName={"about"} />
      
      <Footer />
    </div>
  )
}
