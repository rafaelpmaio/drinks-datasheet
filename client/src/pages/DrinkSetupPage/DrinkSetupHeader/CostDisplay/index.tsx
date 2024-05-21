import styles from "./CostDisplay.module.scss";
import { useContext, useEffect, useState } from "react";
import Input from "components/Input";
import { DrinkCreationContext } from "state/DrinkCreationContext";
import validateValue from "shared/utils/validateValue";

export default function CostDisplay() {
  const [precoVendaInput, setPrecoVendaInput] = useState("");
  const { confectionCost, sellPrice, setSellPrice, costPercentage, setCostPercentage } =
    useContext(DrinkCreationContext);

  useEffect(() => {
    setCostPercentage((confectionCost / sellPrice) * 100 || 0);
  }, [precoVendaInput])

  return (
    <div className={styles.cost_div}>
      <Input
        type="number"
        id="preco-venda"
        labelText="Sell Price"
        value={precoVendaInput}
        onChange={e => {
          const value = validateValue(Number(e));
          setPrecoVendaInput(String(value));
          setSellPrice(value)
        }}
        required
      />
      <p className={styles.cost_result_line}>
        Production Cost:
        <b className={styles.highlight}> R${confectionCost}</b>
      </p>
      <p className={styles.cost_result_line}>
        Cost Percentage: <b className={styles.highlight}>{costPercentage}%</b>
      </p>
    </div>
  );
}
