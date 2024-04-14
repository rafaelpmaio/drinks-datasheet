import { IIngredient } from "shared/interfaces/IIngredient";

export default function ingredientBuilder(
  _id: string,
  amountString: string,
  measureUnit: string,
  ingredient: string,
  costString: string
) {
  const amount = Number.parseFloat(amountString);
  const cost = Number.parseFloat(costString);

  const newIngredient: IIngredient = {
    _id,
    amount,
    measureUnit,
    ingredient,
    cost,
  };
  
  return newIngredient;
}
