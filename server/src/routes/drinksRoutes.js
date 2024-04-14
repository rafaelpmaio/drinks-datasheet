import express from "express";
import DrinkController from "../controllers/drinkController.js";

const routes = express.Router();

routes.get("/drinks", DrinkController.listDrinks);
routes.get("/drinks/:id", DrinkController.getDrink);
routes.post("/drinks", DrinkController.createDrink);
routes.put("/drinks/:id", DrinkController.updateDrink);
routes.delete("/drinks/:id", DrinkController.deleteDrink);

export default routes;