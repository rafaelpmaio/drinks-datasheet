import Button from 'components/Button';
import Input from 'components/Input';
import styles from './PreparationInputs.module.scss'
import { useContext, useEffect, useState } from 'react';
import { DrinkCreationContext } from 'state/DrinkCreationContext';
import { FiSend } from "react-icons/fi";


export default function PreparationInputs() {

    const { steps, setSteps } = useContext(DrinkCreationContext);
    const { setGlassware, setGarnish } = useContext(DrinkCreationContext);

    const [glasswareInput, setGlasswareInput] = useState('');
    const [garnishInput, setGarnishInput] = useState('');
    const [id, setId] = useState(0);
    const [stepInput, setStepInput] = useState("");

    const handleClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        setSteps([...steps, stepInput]);
        setId(id + 1);
        setStepInput("");
    };

    useEffect(() => {
        setGarnish(garnishInput);
        setGlassware(glasswareInput);
    }, [])


    return (
        <div className={styles.inputs}>
            <Input
                id='garnish'
                labelText='Wich garnish will be used?'
                value={garnishInput}
                onChange={setGarnishInput}
                className={styles.input}
                required
            />
            <Input
                id='glassware'
                labelText='Wich glassware will be used?'
                value={glasswareInput}
                onChange={setGlasswareInput}
                required
            />
            <span className={styles.inpt_btn_align}>
                <Input
                    id="step"
                    labelText="Describe the next step"
                    value={stepInput}
                    onChange={setStepInput}
                    maxLenght={100}
                />
                <Button onClick={handleClick}><FiSend/></Button>
            </span>
        </div>
    )
}