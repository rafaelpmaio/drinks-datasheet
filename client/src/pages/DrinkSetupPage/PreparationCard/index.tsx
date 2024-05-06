import styles from './Preparation.module.scss';
import themeStyles from 'styles/theme.module.scss'
import StepsList from './StepsList';
import Input from 'components/Input';
import { useContext, useEffect, useState } from 'react';
import { DrinkCreationContext } from 'state/DrinkCreationContext';


export default function PreparationCard() {

    const [glasswareInput, setGlasswareInput] = useState('');
    const [garnishInput, setGarnishInput] = useState('');

    const { setGlassware, setGarnish } = useContext(DrinkCreationContext);

    useEffect(() => {
        setGarnish(garnishInput);
        setGlassware(glasswareInput);
    })


    return (
        <section className={`${styles.preparation_card} ${themeStyles.card}`} >
            <h2>Preparation</h2>
            <StepsList />
            <Input
                id='garnish'
                labelText='Wich garnish will be used?'
                value={garnishInput}
                onChange={setGarnishInput}
                required
                className={styles.input}
            />
            <Input
                id='glassware'
                labelText='Wich glassware will be used?'
                value={glasswareInput}
                onChange={setGlasswareInput}
                required
                className={styles.input}
            />
        </section>
    )
};