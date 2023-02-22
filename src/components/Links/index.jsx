import styles from 'src/components/Links/Links.module.css'

export function Links(props) {

  const { items } = props;

  return (
    <div className={styles.grid}>
      {items.map((item) => {
        return (
          <a href={item.href} className={styles.card} key={item.key}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  )
}
