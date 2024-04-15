import { IIngredient } from "shared/interfaces/IIngredient";
import mongoose from "mongoose";

export default function ingredientBuilder(
  amountString: string,
  measureUnit: string,
  ingredient: string,
  costString: string
) {
  const amount = Number.parseFloat(amountString);
  const cost = Number.parseFloat(costString);

  const newId = new mongoose.Types.ObjectId();
  const _id = String(newId);

  const newIngredient: IIngredient = {
    _id,
    amount,
    measureUnit,
    ingredient,
    cost,
  };
  
  return newIngredient;
}
