import styles from "./DrinkDatasheetPreparation.module.css";
import pageStyle from "pages/DrinkPage/DrinkPage.module.css";
import { IDrink } from "shared/interfaces/IDrink";

export default function DrinkDatasheetPreparation({
  steps,
  garnish,
  glassware,
}: IDrink) {
  return (
    <div>
      <h3>STEPS</h3>
      <ul className={styles.list}>
        {steps.map((step, index) => (
          <li className={styles.step_list_item}>
            <b className={pageStyle.highlight}>{`Step ${index + 1}: `}</b>
            {step}
          </li>
        ))}
      </ul>
      <span className={styles.decoration_row}>
        <h3 className={styles.decoration_title}>GARNISH</h3>
        <span>{garnish}</span>
      </span>
      <span className={styles.decoration_row}>
        <h3 className={styles.decoration_title}>GLASSWARE</h3>
        <span> {glassware} </span>
      </span>
    </div>
  );
}
