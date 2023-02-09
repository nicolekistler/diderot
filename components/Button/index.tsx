import styles from '@/styles/components/Button.module.scss'

type Props = {
    text: string,
    href: string
    secondary?: boolean
}

export default function Button({
    text,
    href,
    secondary = false
}: Props) {

    return (
        <>
            <a className={styles.buttonLink} href={href}>
                <div className={ secondary ? styles.buttonSecondary : styles.buttonPrimary}>
                    {text}
                </div>
            </a>
        </>
    )
  }
  