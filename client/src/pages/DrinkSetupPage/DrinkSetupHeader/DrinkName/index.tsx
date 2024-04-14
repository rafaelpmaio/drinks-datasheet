import styles from './DrinkName.module.css'
import { useContext, useEffect, useState } from 'react';
import Input from 'components/Input';
import { DrinkCreationContext } from 'state/DrinkCreationContext';

export default function DrinkName() {
    const { name, setName } = useContext(DrinkCreationContext);
    const [nameInput, setNameInput] = useState('');

    useEffect(() => setName(nameInput))

    return (
        <div className={styles.drink_name_div}>
            <h1 className={styles.drink_name_title}>{name}</h1>
            <Input
                id='drink-name'
                labelText='Drink Name'
                value={nameInput}
                onChange={setNameInput}
                className={styles.drink_name_input}
                required
            />
        </div>
    )
};
