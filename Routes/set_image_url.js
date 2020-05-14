//Controllers
const set_image_url_controller = require("../controllers/SetImageUrlController");

//External
const express = require("express");

//Config
const router = express.Router();

//route
router.post("/set_image_url", set_image_url_controller.set_url);


module.exports = router;