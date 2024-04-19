import styles from "./DrinkDatasheetHeader.module.scss";
import pageStyles from "pages/DrinkPage/DrinkPage.module.scss";
import { IDrink } from "shared/interfaces/IDrink";

export default function DrinkDatasheetHeader({
  name,
  sellPrice,
  confectionCost,
  costPercentage,
}: IDrink) {
  return (
    <section className={styles.drink_header}>
      <h1 className={styles.drink_name}>{name}</h1>
      <div className={styles.cost_div}>
        <p className={styles.cost_line}>
          Sell Price:
          <b className={pageStyles.highlight}> R${sellPrice}</b>
        </p>
        <p className={styles.cost_line}>
          Production Cost:
          <b className={pageStyles.highlight}> R${confectionCost} </b>
        </p>
        <p className={styles.cost_line}>
          Cost Percentage:
          <b className={pageStyles.highlight}>{costPercentage}%</b>
        </p>
      </div>
    </section>
  );
}
