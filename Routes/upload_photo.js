//Controllers
const upload_photo_controller = require("../controllers/UploadPhotoController");

//External
const express = require("express");

//Config
const router = express.Router();

//route
router.post("/upload_photo/:book_year", upload_photo_controller.upload_photo);


module.exports = router;