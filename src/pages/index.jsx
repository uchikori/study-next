import Head from 'next/head'
import Image from 'next/image'
import styles from 'src/styles/Home.module.css'
import { Header } from 'src/components/Header/index.jsx'
import { Main } from 'src/components/Main/index.jsx'
import { Footer } from 'src/components/Footer/index.jsx'
import { useCallback, useEffect } from 'react'

export default function Home() {

  const handleClick = useCallback((event) => {
    console.log(event);
    event.preventDefault();
    alert(1);
  },[]);

  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";

    //アンマウント(コンポーネントが消滅)時の処理
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header />

      <a href="" onClick={handleClick}>ボタン</a>

      <Main fileName={"index"} />
      
      <Footer />
    </div>
  )
}