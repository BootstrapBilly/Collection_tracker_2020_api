//Controllers
const fetch_books_controller = require("../controllers/fetch_books_controller");

//External
const express = require("express");

//Config
const router = express.Router();

//route
router.get("/fetch_books", fetch_books_controller.fetch_books);


module.exports = router;