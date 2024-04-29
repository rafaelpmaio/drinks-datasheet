import themeStyles from 'styles/theme.module.scss';
import styles from './IngredientsCard.module.scss'
import IngredientsList from "./IngredientsList";
import IngredientInputs from "./IngredientInputs";
import DialogBox from 'components/DialogBox';

export default function IngredientsCard() {

    

    return (
        <section className={`${themeStyles.card} ${styles.ingredients_card}`}>
            <h2>Ingredients</h2>
            <IngredientsList />
            <DialogBox 
                title='add a new Ingredient' 
                buttonText="add" 
                contentText={<IngredientInputs />}
                handleSubmit={() => {}}
                className=''
            />
            
        </section>
    )
};