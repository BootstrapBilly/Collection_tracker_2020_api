//Controllers
const delete_book_controller = require("../controllers/DeleteBookController");

//External
const express = require("express");

//Config
const router = express.Router();

//route
router.post("/delete_book", delete_book_controller.delete_book);


module.exports = router;