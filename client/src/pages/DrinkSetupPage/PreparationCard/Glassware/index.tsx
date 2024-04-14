import styles from 'pages/DrinkSetupPage/PreparationCard/Preparation.module.css';
import { useContext, useEffect, useState } from 'react';
import Input from 'components/Input';
import { DrinkCreationContext } from 'state/DrinkCreationContext';

export default function Glassware() {

    const [glasswareInput, setGlasswareInput] = useState('');
    
    const { glassware, setGlassware } = useContext(DrinkCreationContext);

    useEffect(() => setGlassware(glasswareInput))

    return (
        <>
            <h3>Glassware <b className={styles.garnish_glassware_typed}>{glassware}</b></h3> 
            <Input
                id='glassware'
                labelText='Wich glassware will be used?'
                value={glasswareInput}
                onChange={setGlasswareInput}
                required
                className={styles.input}
            />
        </>
    )
};