const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");

function meuMiddleware(req, res, next) {
  req.session = { nome: "Matheus", sobrenome: "Miranda" };
  console.log();
  console.log("Passei no seu middleware");
  console.log();
  next();
}

// Rotas da home
route.get("/", homeController.index);

//rotas de login

route.get("/login/index", loginController.index);
route.post("/login/register", loginController.register);
route.post("/login/login", loginController.login);
route.get("/login/logout", loginController.logout);

module.exports = route;
