import mongoose from "mongoose";
import { drinkSchema } from "./Drink.js";

const collectionSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: [true, "the collection name is missing"] },
    image: { type: String },
    description: { type: String },
    drinksList: {type: [drinkSchema], required: true},
    deleted: { type: Boolean },
  },
  { versionKey: false }
);

const collection = mongoose.model("collections", collectionSchema);

export default collection;
