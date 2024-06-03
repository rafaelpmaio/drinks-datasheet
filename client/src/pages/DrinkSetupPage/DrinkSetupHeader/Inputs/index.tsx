import Input from 'components/Input';
import { useContext, useEffect, useState } from 'react';
import { DrinkCreationContext } from 'state/DrinkCreationContext';
import validateValue from "shared/utils/validateValue";
import styles from "./Inputs.module.scss";

interface Inputs {
    inputSellPrice: string,
    setInputSellPrice: React.Dispatch<React.SetStateAction<string>>
}

export default function Inputs({ inputSellPrice, setInputSellPrice }: Inputs) {
    const [nameInput, setNameInput] = useState('');
    const { setName } = useContext(DrinkCreationContext);
    const { setSellPrice } = useContext(DrinkCreationContext);

    useEffect(() => setSellPrice(0), [])

    return (
        <div className={styles.inputs_div}>
            <Input
                id='drink-name'
                labelText='Drink Name'
                value={nameInput}
                onChange={value => {
                    setNameInput(value);
                    setName(nameInput)
                }}
                required
            />
            <Input
                type="number"
                id="preco-venda"
                labelText="Sell Price"
                value={inputSellPrice}
                onChange={e => {
                    const value = validateValue(Number(e));
                    setInputSellPrice(String(value));
                    setSellPrice(value)
                }}
                required
            />
        </div>
    )
}