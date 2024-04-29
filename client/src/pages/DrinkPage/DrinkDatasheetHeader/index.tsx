import styles from "./DrinkDatasheetHeader.module.scss";
import themeStyles from "styles/theme.module.scss";
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
          <b className={themeStyles.highlight}> R${sellPrice}</b>
        </p>
        <p className={styles.cost_line}>
          Production Cost:
          <b className={themeStyles.highlight}> R${confectionCost} </b>
        </p>
        <p className={styles.cost_line}>
          Cost Percentage:
          <b className={themeStyles.highlight}>{costPercentage}%</b>
        </p>
      </div>
    </section>
  );
}
