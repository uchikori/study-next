import styles from '../styles/Home.module.css'

export function Headline(props) {
  const {fileName} = props;
   
  return (
    <div className="Home__top">
        <h1 className={styles.title}>
        {fileName} Page
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/{fileName}.js</code>
        </p>
    </div>
  )
}
