import { useContext } from "react";
import { IIngredient } from "shared/interfaces/IIngredient";
import styles from "pages/DrinkSetupPage/IngredientsCard/IngredientsCard.module.css";
import { DrinkCreationContext } from "state/DrinkCreationContext";
import Button from "components/Button";
import handleDeleteById from "shared/utils/handleDeleteById";

export default function IngredientListItem({
  _id,
  amount,
  measureUnit,
  ingredient,
  cost,
}: IIngredient) {
  const { setIngredients, ingredients } = useContext(DrinkCreationContext);
  return (
    <>
      <li key={_id} className={styles.ingredients_list}>
        <b className={styles.coluna_quantidade}>{amount.toFixed(2)}</b>
        <b className={styles.coluna_medida}>{measureUnit}</b>
        <b className={styles.coluna_ingrediente}>{ingredient}</b>
        <b className={styles.coluna_custo}>{cost.toFixed(2)}</b>
        <Button
          type="delete"
          onClick={() => handleDeleteById(_id, ingredients, setIngredients)}
        >
          x
        </Button>
      </li>
    </>
  );
}
