import express from "express";
import CollectionController from "../controllers/collectionController.js";

const routes = express.Router();

routes.get("/collections", CollectionController.listCollections);
routes.get("/collections/:id", CollectionController.getCollection);
routes.post("/collections", CollectionController.createCollection);
routes.put("/collections/:id", CollectionController.updateCollection);
routes.delete("/collections/:id", CollectionController.deleteCollection);
// routes.put("/collections/:id", CollectionController.deleteCollection);

export default routes;