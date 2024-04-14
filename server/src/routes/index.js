import express from "express";
import drinks from "./drinksRoutes.js";
import collections from "./collectionsRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Server Online");
  });

  app.use(express.json(), drinks, collections);
};

export default routes;
