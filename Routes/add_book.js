const path = require("path");

//Controllers
//server.use(express.static(path.join(__dirname, 'public')));//Allow the html to connect to css pages
const add_book_controller = require(path.join(__dirname, "controllers/add_book_controller.js"))
  //  "../controllers/add_book_controller");

//External
const express = require("express");

//Config
const router = express.Router();

//route
router.post("/add_book", add_book_controller.add_book);


module.exports = router;