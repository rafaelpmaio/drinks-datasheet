import styles from "./IngredientsList.module.scss";
import IngredientListItem from "pages/DrinkSetupPage/IngredientsCard/IngredientsList/IngredientListItem";
import { useContext } from "react";
import { DrinkCreationContext } from "state/DrinkCreationContext";

export default function IngredientsList() {
  const { ingredients } = useContext(DrinkCreationContext);

  return (
    <div className={styles.ingredients_div}>
      <h3 className={styles.columns}>
        <b className={styles.amount_column}>amount</b>
        <b className={styles.measure_column}>unit</b>
        <b className={styles.ingredient_column}>ingredient</b>
        <b className={styles.cost_column}>cost</b>
      </h3>
      <ul className={styles.list}>
        {ingredients.map((ingredient) => (
          <IngredientListItem key={ingredient._id} {...ingredient} />
        ))}
      </ul>
    </div>
  );
}
