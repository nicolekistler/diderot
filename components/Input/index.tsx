import styles from '@/styles/components/Input.module.scss'

type Props = {
  label: string;
  setValue: Function;
  value: string;
}

export default function Input({
  label,
  setValue,
  value
}: Props) {

  const handleValueChange = (event: React.FormEvent<HTMLInputElement>) => {
      // TODO: add char limit here etc
      const target = event.target as HTMLTextAreaElement;

      setValue(target.value);
  }
  
  return (
    <div className={styles.valueField}>
      <div>{label.toUpperCase()}</div>
      <input className={styles.valueInput} onChange={handleValueChange} value={value} autoFocus />
    </div>
  )
}
