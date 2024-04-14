import { ICollection } from "shared/interfaces/ICollection";
import { IDrink } from "shared/interfaces/IDrink";
import mongoose from "mongoose";

interface data {
  name: string;
  image: string;
  description: string;
}

export default function collectionBuilder(
  { name, image, description }: data,
  drinksList: IDrink[]
) {

  const newId = new mongoose.Types.ObjectId();
  const _id = String(newId)

  const collection: ICollection = {
    _id,
    name,
    image,
    description,
    drinksList: drinksList,
  };

  return collection;
}
