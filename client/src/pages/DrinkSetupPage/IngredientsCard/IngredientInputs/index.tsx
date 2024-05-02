import { Input, InputLabel } from "@mui/material";
import styles from "./IngredientInputs.module.scss";
import React, { useContext, useEffect } from "react";
import { DrinkCreationContext } from "state/DrinkCreationContext";

interface IngredientInputsProps {
  amount: string,
  setAmount: React.Dispatch<React.SetStateAction<string>>,
  measureUnit: string,
  setMeasureUnit: React.Dispatch<React.SetStateAction<string>>,
  ingredient: string,
  setIngredient: React.Dispatch<React.SetStateAction<string>>,
  cost: string,
  setCost: React.Dispatch<React.SetStateAction<string>>,
}

export default function IngredientInputs({
  amount,
  setAmount,
  measureUnit,
  setMeasureUnit,
  ingredient,
  setIngredient,
  cost,
  setCost
}: IngredientInputsProps) {

  const {
    ingredients,
    sellPrice,
    confectionCost,
    setConfectionCost,
    setCostPercentage,
  } = useContext(DrinkCreationContext);


  useEffect(() => {
    setConfectionCost(
      ingredients
        .map((ingredient) => ingredient.cost)
        .reduce((total, current) => total + current, 0)
    );

    setCostPercentage((confectionCost / sellPrice) * 100 || 0);

  }, [ingredients, sellPrice, confectionCost]);

  return (
    <>
      <Input
        id="amount"
        type="number"
        value={amount}
        className={styles.input}
        onChange={(e) => setAmount(e.target.value)}
      />
      <InputLabel>Amount</InputLabel>
      <Input
        id="measure"
        value={measureUnit}
        className={styles.input}
        onChange={(e) => setMeasureUnit(e.target.value)}
      />
      <InputLabel>Unit</InputLabel>
      <Input
        id="ingredient"
        value={ingredient}
        className={styles.input}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <InputLabel>Ingredient Name</InputLabel>
      <Input
        id="cost"
        value={cost}
        type="number"
        className={styles.input}
        onChange={(e) => setCost(e.target.value)}
      />
      <InputLabel>Cost</InputLabel>
    </ >
  );
}
