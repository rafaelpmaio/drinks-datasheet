import { IDrink } from "shared/interfaces/IDrink";
import mongoose from "mongoose";

export default function drinkBuilder({
  name,
  image,
  ingredients,
  steps,
  garnish,
  glassware,
  confectionCost,
  sellPrice,
  costPercentage,
}: IDrink) {
  const newId = new mongoose.Types.ObjectId();
  const _id = String(newId);

  const drink: IDrink = {
    _id,
    name,
    image,
    ingredients,
    steps,
    garnish,
    glassware,
    confectionCost,
    sellPrice,
    costPercentage,
  };

  return drink;
}
