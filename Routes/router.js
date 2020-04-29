//Controllers
const add_book_controller = require("../controllers/AddBookController");
const delete_book_controller = require("../controllers/DeleteBookController");
const fetch_books_controller = require("../controllers/FetchBooksController");
const search_for_book_controller = require("../controllers/SearchForBooksController");
const get_conditions_controller = require("../controllers/GetConditionsController");
const worth_buying_controller = require("../controllers/WorthBuyingController");


//External
const express = require("express");

//Config
const router = express.Router();

//routes
router.post("/add_book", add_book_controller.add_book);
router.delete("/delete_book", delete_book_controller.delete_book);
router.get("/fetch_books", fetch_books_controller.fetch_books);
router.post("/search_for_book", search_for_book_controller.search_for_book);
router.post("/get_conditions", get_conditions_controller.get_conditions);
router.post("/worth_buying", worth_buying_controller.worth_buying);



module.exports = router;

