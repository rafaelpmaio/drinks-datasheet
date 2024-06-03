import styles from './DrinkSetupHeader.module.scss';
import themeStyle from 'styles/theme.module.scss'
import DrinkPhoto from './DrinkPhoto';
import CostDisplay from './CostDisplay';
import Inputs from './Inputs';
import { useContext, useEffect, useState } from 'react';
import { DrinkCreationContext } from 'state/DrinkCreationContext';

export default function DrinkSetupHeader() {
    const [inputSellPrice, setInputSellPrice] = useState("");
    const { setConfectionCost, setCostPercentage } =
    useContext(DrinkCreationContext);

    useEffect(() => {setConfectionCost(0); setCostPercentage(0)}, [])

    return (
        <div className={`${themeStyle.card} ${styles.drink_setup_header}`}>
            <DrinkPhoto />
            <Inputs inputSellPrice={inputSellPrice} setInputSellPrice={setInputSellPrice} />
            <CostDisplay inputSellPrice={inputSellPrice} />
        </div>
    )
};