import styles from './DrinkSetupHeader.module.scss';
import themeStyle from 'styles/theme.module.scss'
import Input from 'components/Input';
import { useContext, useEffect, useState } from 'react';
import { DrinkCreationContext } from 'state/DrinkCreationContext';
import DrinkPhoto from './DrinkPhoto';
import CostDisplay from './CostDisplay';

export default function DrinkSetupHeader() {

    const { name, setName } = useContext(DrinkCreationContext);
    const [nameInput, setNameInput] = useState('');

    useEffect(() => setName(nameInput), [nameInput])



    return (
        <header className={`${themeStyle.card} ${styles.drink_setup_header}`}>
            <DrinkPhoto />
            <Input
                id='drink-name'
                labelText='Drink Name'
                value={nameInput}
                onChange={setNameInput}
                required
            />
            <CostDisplay />

        </header>
    )
};