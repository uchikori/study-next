import styles from './Links.module.css'

export function Links() {
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
  return (
    <div className={styles.grid}>
      {ITEMS.map((item) => {
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
