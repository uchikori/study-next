import styles from 'src/components/Main/Main.module.css'
import { Headline } from 'src/components/Headline/index.jsx'
import { Links } from 'src/components/Links/index.jsx'
import { useCallback, useEffect, useState } from 'react'

export function Main(props) {
  const {fileName} = props

  const KEY = () => Math.random().toString(32).substring(2);
  const ITEMS = [
    {
      href: "https://nextjs.org/docs",
      title: "Documentation \u2192",
      description: "Find in-depth information about Next.js features and API.",
      key: KEY(),
    },
    {
      href: "https://nextjs.org/learn",
      title: "Learn \u2192",
      description: "Learn about Next.js in an interactive course with quizzes!",
      key: KEY(),
    },
    {
      href: "https://github.com/vercel/next.js/tree/canary/examples",
      title: "Examples \u2192",
      description: "Discover and deploy boilerplate example Next.js projects.",
      key: KEY(),
    },
    {
      href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      title: "Deploy \u2192",
      description: "Instantly deploy your Next.js site to a public URL with Vercel.",
      key: KEY(),
    },
  ]

  const [items, setItems] = useState(ITEMS)

  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    })
  }, []);

  return (
      <main className={styles.main}>
        <Headline fileName={fileName} handleReduce={handleReduce}>
            <code className={styles.code}>pages/{fileName}.js</code>
        </Headline>
        <Links items={items}  />
      </main>
  )
}
