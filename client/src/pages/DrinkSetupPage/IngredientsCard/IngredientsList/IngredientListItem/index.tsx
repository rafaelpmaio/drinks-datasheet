import { useContext } from "react";
import { IIngredient } from "shared/interfaces/IIngredient";
import styles from "../IngredientsList.module.scss";
import { DrinkCreationContext } from "state/DrinkCreationContext";
import Button from "components/Button";
import handleDeleteById from "shared/utils/handleDeleteById";
import { MdDelete } from "react-icons/md"

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
      <li key={_id} className={styles.columns}>
        <b className={styles.amount_column}>{amount.toFixed(2)}</b>
        <b className={styles.measure_column}>{measureUnit}</b>
        <b className={styles.ingredient_column}>{ingredient}</b>
        <b className={styles.cost_column}>{cost.toFixed(2)}</b>
        <Button
          type="delete"
          className={styles.deleteBtn}
          onClick={() => handleDeleteById(_id, ingredients, setIngredients)}
        >
          <MdDelete className="1x"/>
        </Button>
      </li>
    </>
  );
}
