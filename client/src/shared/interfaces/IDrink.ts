import { IIngredient } from "./IIngredient";

export interface IDrink {
    _id: string,
    name: string,
    image: string,
    ingredients: IIngredient[],
    steps: string[],
    garnish: string,
    glassware: string,
    confectionCost: number,
    sellPrice: number,
    costPercentage: number

}