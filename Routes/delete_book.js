//Controllers
const delete_book_controller = require("../controllers/delete_book_controller");

//External
const express = require("express");

//Config
const router = express.Router();

//route
router.delete("/delete_book", delete_book_controller.delete_book);


module.exports = router;