import styles from "pages/DrinkSetupPage/IngredientsCard/IngredientsCard.module.scss";
import React, { useContext, useEffect, useState } from "react";
import Input from "components/Input";
import Button from "components/Button";
import ingredientBuilder from "shared/builders/ingredientBuilder";
import resetInputs from "shared/utils/resetInputs";
import { DrinkCreationContext } from "state/DrinkCreationContext";
import validateInputIsFilled from "errors/validateInputIsFilled";

export default function IngredientInputs() {
  const {
    ingredients,
    sellPrice,
    setIngredients,
    confectionCost,
    setConfectionCost,
    setCostPercentage,
  } = useContext(DrinkCreationContext);

  const [amount, setAmount] = useState("");
  const [measureUnit, setMeasureUnit] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [cost, setCost] = useState("");

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {

    event.preventDefault();

    validateInputIsFilled(amount, measureUnit, ingredient, cost);

    let newIngredient = ingredientBuilder(
      amount,
      measureUnit,
      ingredient,
      cost
    );

    setIngredients([...ingredients, newIngredient]);

    resetInputs(setAmount, setMeasureUnit, setIngredient, setCost);
  };

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
      <div
        className={`${styles.ingredient_inputs_list} ${styles.ingredients_list}`}
      >
        <Input
          id="amount"
          labelText="Amount"
          type="number"
          value={amount}
          onChange={(valor) => setAmount(valor)}
        />
        <Input
          id="measure"
          labelText="Unit"
          value={measureUnit}
          onChange={(valor) => setMeasureUnit(valor)}
        />
        <Input
          id="ingredient"
          labelText="Ingredient"
          value={ingredient}
          onChange={(valor) => setIngredient(valor)}
        />
        <Input
          id="cost"
          labelText="Cost"
          type="number"
          value={cost}
          onChange={(valor) => setCost(valor)}
        />
      </div>
      <Button onClick={handleClick} >+</Button>
    </>
  );
}
