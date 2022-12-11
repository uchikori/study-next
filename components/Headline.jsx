import styles from './Headline.module.css'

export function Headline(props) {
  
  const {fileName, children} = props;
  
  return (
    <div className="Home__top">
        <h1 className={styles.title}>
        {fileName} Page
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          {children}
        </p>
    </div>
  )
}
