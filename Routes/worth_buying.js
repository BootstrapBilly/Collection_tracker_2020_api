//Controllers
const worth_buying_controller = require("../controllers/WorthBuyingController");

//External
const express = require("express");

//Config
const router = express.Router();

//route
router.post("/worth_buying", worth_buying_controller.worth_buying);


module.exports = router;