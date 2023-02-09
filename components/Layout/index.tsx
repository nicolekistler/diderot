import styles from '@/styles/components/Layout.module.scss'

type Props = {
    children: React.ReactNode
  }

export default function Layout({
    children
}: Props) {
  
  return (
    <main className={styles.main}>
        <div className={styles.centerContainer}>
            {children}
        </div>
    </main>
  )
}

