//Controllers
const get_conditions_controller = require("../controllers/GetConditionsController");

//External
const express = require("express");

//Config
const router = express.Router();

//route
router.post("/get_conditions", get_conditions_controller.get_conditions);


module.exports = router;