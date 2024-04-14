import { IDrink } from "shared/interfaces/IDrink";

function validateDrink({ingredients, steps}: IDrink)  {
  if (!ingredients.length) {
    alert("You forgot to set the ingredients!");
    throw Error
  }
  if (!steps.length) {
    alert("You forgot to set the steps!");
    throw Error
  }
}

export default validateDrink
