import { IDrink } from "./IDrink";
import mongoose from "mongoose";

export interface ICollection {
    _id: string,
    name: string,
    image: string,
    description?: string,
    drinksList: IDrink[]
}