//Controllers
const add_book_controller = require("../controllers/add_book_controller.js");

//External
const express = require("express");

//Config
const router = express.Router();

//route
router.post("/add_book", add_book_controller.add_book);


module.exports = router;