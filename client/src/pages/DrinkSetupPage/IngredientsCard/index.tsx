import pageStyles from 'pages/DrinkSetupPage/DrinkSetupPage.module.scss'
import IngredientsList from "./IngredientsList";
import IngredientInputs from "./IngredientInputs";

export default function IngredientsCard() {
    
    return (
        <section className={pageStyles.card}>
            <IngredientsList />
            <IngredientInputs />
        </section>
    )
};