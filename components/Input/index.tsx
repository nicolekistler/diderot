import { useState } from 'react';
import styles from '@/styles/components/Input.module.scss'

type Props = {
  label: string;
}

export default function Input({
  label
}: Props) {
  const [value, setValue] = useState('');

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
