import { useState } from 'react'
import style from '@/styles/components/NumberInput.module.scss'

type Props = {
    label: string;
    initialNumber: number;
    maxNumber: number;
    setNumber: Function;
}

export default function NumberInput({
    label,
    initialNumber,
    maxNumber = 10,
    setNumber
}: Props) {
    const [currentNumber, setCurrentNumber] = useState(initialNumber);

    const decrement = () => {
        if (currentNumber === initialNumber) {
            return;
        }

        const newNumber = currentNumber - 1;
        setCurrentNumber(newNumber);
        setNumber(newNumber);
    };

    const increment = () => {
        if (currentNumber === maxNumber) {
            return;
        }

        const newNumber = currentNumber + 1;
        setCurrentNumber(newNumber);
        setNumber(newNumber);
    }

    return (
        <>
            <div className={style.label}>{label.toUpperCase()}</div>
            <div className={style.count}>
                <div 
                    className={`${style.arrowLeft} ${currentNumber === initialNumber && 'disabled'}`}
                    onClick={decrement}
                />
                    <div className='number'>{currentNumber}</div>
                <div 
                    className={`${style.arrowRight} ${currentNumber === maxNumber && 'disabled'}`}
                    onClick={increment}
                />
            </div>
        </>
    );
}

