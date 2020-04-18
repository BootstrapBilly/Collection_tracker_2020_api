//Controllers
const search_for_book_controller = require("../controllers/SearchForBooksController");

//External
const express = require("express");

//Config
const router = express.Router();

//route
router.post("/search_for_book", search_for_book_controller.search_for_book);


module.exports = router;