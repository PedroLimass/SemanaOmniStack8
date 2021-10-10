const express = require("express");
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DeslikeController = require("./controllers/DeslikeController");

const routes = express.Router();

routes.get("/allDevs", DevController.getAll);
routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);

routes.post("/devs/:id/like", LikeController.store);
routes.post("/devs/:id/deslike", DeslikeController.store);

module.exports = routes;
