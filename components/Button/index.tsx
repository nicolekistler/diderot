import styles from '@/styles/components/Button.module.scss'
import { useRouter } from 'next/router'

type Props = {
    text: string;
    href?: string;
    secondary?: boolean;
    onClickOverride?: (e: React.MouseEvent) => void;
}

export default function Button({
    text,
    href,
    secondary = false,
    onClickOverride
}: Props) {
    const router = useRouter()

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        router.push(href || '/')
    }

    return (
        <>
            <div className={styles.buttonWrapper} onClick={onClickOverride ? onClickOverride : handleClick}>
                <div className={ secondary ? styles.buttonSecondary : styles.buttonPrimary}>
                    {text}
                </div>
            </div>
        </>
    )
  }
  