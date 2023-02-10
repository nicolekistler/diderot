import styles from '@/styles/components/Layout.module.scss'
import Header from '@/components/Header'

type Props = {
    children: React.ReactNode;
  }

export default function Layout({
    children
}: Props) {
  
  return (
    <main className={styles.main}>
        <div className={styles.centerContainer}>
            <Header />
            {children}
        </div>
    </main>
  )
}

