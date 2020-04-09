//Controllers
const search_for_book_controller = require("../controllers/search_for_book_controller");

//External
const express = require("express");

//Config
const router = express.Router();

//route
router.post("/search_for_book", search_for_book_controller.search_for_book);


module.exports = router;