import styles from 'src/components/Headline/Headline.module.css'

export function Headline(props) {
  
  const {fileName, children, handleReduce } = props;
  
  return (
    <div className="Home__top">
        <h1 className={styles.title}>
        {fileName} Page
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          {children}
        </p>
        <button onClick={handleReduce}>減らす</button>
    </div>
  )
}
