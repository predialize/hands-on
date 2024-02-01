const express = require("express");
const router = express.Router();
const clientsDB = require("../clients.mock");

module.exports.load = (app) => {
  router.get("/", (req, res) => res.status(200).json(clientsDB));

  app.use("/client", router);
};
