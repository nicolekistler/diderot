import { useState } from 'react';
import styles from '@/styles/components/Input.module.scss'

export default function Input() {
  const [nickname, setNicknameValue] = useState('');

  const handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
      // TODO: add char limit here etc
      const target = event.target as HTMLTextAreaElement;

      setNicknameValue(target.value);
  }
  
  return (
    <div className={styles.nicknameField}>
      <div className='nickname-label'>ENTER YOUR NICKNAME</div>
      <input className={styles.nicknameInput} onChange={handleNameChange} value={nickname} autoFocus />
    </div>
  )
}
