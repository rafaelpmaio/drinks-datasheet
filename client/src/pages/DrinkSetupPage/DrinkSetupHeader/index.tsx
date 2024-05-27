import styles from './DrinkSetupHeader.module.scss';
import themeStyle from 'styles/theme.module.scss'
import DrinkPhoto from './DrinkPhoto';
import CostDisplay from './CostDisplay';
import Inputs from './Inputs';
import { useState } from 'react';

export default function DrinkSetupHeader() {
    const [inputSellPrice, setInputSellPrice] = useState("");

    return (
        <div className={`${themeStyle.card} ${styles.drink_setup_header}`}>
            <DrinkPhoto />
            <Inputs inputSellPrice={inputSellPrice} setInputSellPrice={setInputSellPrice} />
            <CostDisplay inputSellPrice={inputSellPrice} />
        </div>
    )
};