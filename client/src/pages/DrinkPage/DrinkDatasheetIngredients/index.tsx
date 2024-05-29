import styles from "./DrinkDatasheetIngredients.module.scss";
import { IDrink } from "shared/interfaces/IDrink";

export default function DrinkDatasheetIngredients({ ingredients }: IDrink) {
  return (
    <div className={styles.ingredients_div}>
      <h2>INGREDIENTS</h2>
      <h3 className={`${styles.columns}`}>
        <b className={styles.amount_column} >Amt </b>
        <b className={styles.measure_unit_column}>Un</b>
        <b className={styles.ingredient_column}>Ingredient</b>
        <b className={styles.cost_column}>Cost</b>
      </h3>
      <div className={styles.columns}>
        <ul className={styles.list}>
          {ingredients.map((ingredient) => (
            <li className={styles.amount_column}> {ingredient.amount} </li>
          ))}
        </ul>
        <ul className={styles.list}>
          {ingredients.map((ingredient) => (
            <li className={styles.measure_unit_column}> {ingredient.measureUnit} </li>
          ))}
        </ul>
        <ul className={styles.list}>
          {ingredients.map((ingredient) => (
            <li className={styles.ingredient_column}> {ingredient.ingredient} </li>
          ))}
        </ul>
        <ul className={styles.list}>
          {ingredients.map((ingredient) => (
            <li className={styles.cost_column}> {ingredient.cost}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
