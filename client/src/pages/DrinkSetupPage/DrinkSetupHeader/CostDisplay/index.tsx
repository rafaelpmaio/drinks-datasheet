import styles from "./CostDisplay.module.scss";
import { useContext, useEffect } from "react";
import { DrinkCreationContext } from "state/DrinkCreationContext";

interface CostDisplayProps {
  inputSellPrice: string
}

export default function CostDisplay({ inputSellPrice }: CostDisplayProps) {
  const { confectionCost, sellPrice, costPercentage, setCostPercentage } =
    useContext(DrinkCreationContext);

  useEffect(() => {
    setCostPercentage((confectionCost / sellPrice) * 100 || 0);
  }, [inputSellPrice])

  return (
    <div className={styles.cost_div}>
      <p className={styles.cost_result_line}>
        Production Cost:
        <b className={styles.highlight}> R${confectionCost.toFixed(2)}</b>
      </p>
      <p className={styles.cost_result_line}>
        Cost Percentage: <b className={styles.highlight}>{costPercentage.toFixed(2)}%</b>
      </p>
    </div>
  );
}
