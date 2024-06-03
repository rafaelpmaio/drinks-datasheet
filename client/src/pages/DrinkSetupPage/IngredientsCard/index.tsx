import themeStyles from 'styles/theme.module.scss';
import styles from './IngredientsCard.module.scss'
import IngredientsList from "./IngredientsList";
import IngredientInputs from "./IngredientInputs";
import DialogBox from 'components/DialogBox';
import { useContext, useState } from 'react';
import ingredientBuilder from 'shared/builders/ingredientBuilder';
import resetInputs from 'shared/utils/resetInputs';
import { DrinkCreationContext } from 'state/DrinkCreationContext';
import { VscNewFile } from "react-icons/vsc";

export default function IngredientsCard() {

    const { ingredients, setIngredients } = useContext(DrinkCreationContext);

    const [amount, setAmount] = useState("");
    const [measureUnit, setMeasureUnit] = useState("");
    const [ingredient, setIngredient] = useState("");
    const [cost, setCost] = useState("");

    const onClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {

        event.preventDefault();

        let newIngredient = ingredientBuilder(
            amount,
            measureUnit,
            ingredient,
            cost
        );

        setIngredients([...ingredients, newIngredient]);

        resetInputs(setAmount, setMeasureUnit, setIngredient, setCost);
    };


    return (
        <section className={`${themeStyles.card} ${styles.ingredients_card}`}>
            <h2>Ingredients</h2>
            <IngredientsList />
            <DialogBox
                title='add a new Ingredient'
                buttonText={<VscNewFile/>}
                onClick={onClick}
                disabled={!amount || !ingredient || !cost || !measureUnit}
                contentText={<IngredientInputs
                    amount={amount}
                    setAmount={setAmount}
                    ingredient={ingredient}
                    setIngredient={setIngredient}
                    cost={cost}
                    setCost={setCost}
                    measureUnit={measureUnit}
                    setMeasureUnit={setMeasureUnit}
                />}
            />
        </section>
    )
};