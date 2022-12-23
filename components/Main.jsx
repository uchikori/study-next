import styles from './Main.module.css'
import { Headline } from './Headline.jsx'
import { Links } from './Links.jsx'

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
