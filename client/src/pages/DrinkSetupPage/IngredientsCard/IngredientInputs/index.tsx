import { Stack, TextField, InputAdornment, MenuItem } from "@mui/material";
import React, { useContext, useEffect } from "react";
import validateValue from "shared/utils/validateValue";
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

  const measureUnitsOptions = [
    {
      value: "gr",
      name: "gram"
    },
    {
      value: "ml",
      name: "milligram"
    },
    {
      value: "oz",
      name: "ounce"
    },
    {
      value: "un",
      name: "unit"
    },
    {
      value: "ds",
      name: "dash"
    },
  ]

  return (
    <Stack direction={"column"} spacing={2}>
      <TextField
        id="amount"
        type="number"
        label="Amount"
        value={amount}
        inputProps={{ min: 0, max: 999 }}
        variant="standard"
        required
        onChange={(e) => {
          const value = validateValue(Number(e.target.value));
          setAmount(String(value));
        }}
      />
      <TextField
        id="measure"
        label="Measure Unit"
        select
        value={measureUnit}
        inputProps={{ maxLength: 5 }}
        variant="standard"
        onChange={(e) => setMeasureUnit(e.target.value)}
        required
      >
        {measureUnitsOptions.map(option => <MenuItem value={option.value}>{option.name}</MenuItem>)}
      </TextField>
      <TextField
        id="ingredient"
        label="Ingredient Name"
        value={ingredient}
        inputProps={{ maxLength: 30 }}
        variant="standard"
        required
        onChange={(e) => setIngredient(e.target.value)}
      />
      <TextField
        id="cost"
        type="number"
        label="Cost"
        value={cost}
        inputProps={{ min: 0, max: 999 }}
        variant="standard"
        required
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}
        onChange={(e) => {
          const value = validateValue(Number(e.target.value));
          setCost(String(value));
        }}
      />
    </Stack>
  );
}
