import styles from "./DrinkDatasheetHeader.module.scss";
import themeStyles from "styles/theme.module.scss";
import { IDrink } from "shared/interfaces/IDrink";
import { handleImageFormat } from "shared/utils/handleImageFormat";


export default function DrinkDatasheetHeader({
  name,
  sellPrice,
  confectionCost,
  costPercentage,
  image
}: IDrink) {
  return (
    <div className={styles.drink_header}>
      <img
        src={handleImageFormat(image, "drinks")}
        alt=""
        className={styles.image}
      />
      <h1 className={styles.drink_name}>{name}</h1>
      <div className={styles.cost_div}>
        <p className={styles.cost_line}>
          Sell Price:
          <strong className={themeStyles.highlight}> R${sellPrice}</strong>
        </p>
        <p className={styles.cost_line}>
          Production Cost:
          <strong className={themeStyles.highlight}> R${confectionCost} </strong>
        </p>
        <p className={styles.cost_line}>
          Cost Percentage:
          <strong className={themeStyles.highlight}>{costPercentage}%</strong>
        </p>
      </div>
    </div>
  );
}
