import styles from 'src/components/Main/Main.module.css'
import { Headline } from 'src/components/Headline/index.jsx'
import { Links } from 'src/components/Links/index.jsx'
import { useEffect } from 'react'

export function Main(props) {
  const {fileName} = props

  return (
      <main className={styles.main}>
          <Headline fileName={fileName}>
              <code className={styles.code}>pages/{fileName}.js</code>
          </Headline>
          <Links />
      </main>
  )
}
