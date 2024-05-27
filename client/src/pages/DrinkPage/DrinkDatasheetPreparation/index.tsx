import styles from "./DrinkDatasheetPreparation.module.scss";
import { IDrink } from "shared/interfaces/IDrink";

export default function DrinkDatasheetPreparation({
  steps,
}: IDrink) {
  return (
    <div className={styles.preparation_div}>
      <h2>STEPS</h2>
      <ul className={styles.list}>
        {steps.map((step, index) => (
          <li className={styles.list_item}>
            <b>{`Step ${index + 1}: `}</b>
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
}
