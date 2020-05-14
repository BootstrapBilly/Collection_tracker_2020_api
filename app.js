//Core node
const path = require("path");

//routers
const add_book_router = require("./Routes/add_book")
const delete_book_router = require("./Routes/delete_book")
const search_for_book = require("./Routes/search_for_book")
const worth_buying = require("./Routes/worth_buying")
const fetch_books = require("./Routes/fetch_books")
const get_conditions = require("./Routes/get_conditions")
const set_image_url = require("./Routes/set_image_url")

//External
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require('mongoose');
const helmet = require("helmet")
const multer = require("multer")

//-File configuration
const MONGODBURI = "mongodb://Billy:bjc123@billy-shard-00-00-qqthk.mongodb.net:27017,billy-shard-00-01-qqthk.mongodb.net:27017,billy-shard-00-02-qqthk.mongodb.net:27017/Collection_tracker?ssl=true&replicaSet=Billy-shard-0&authSource=admin&retryWrites=true&w=majority";

const MONGODBURIPRIVATE = "mongodb://Billy:bjc123@billy-shard-00-00-qqthk.mongodb.net:27017,billy-shard-00-01-qqthk.mongodb.net:27017,billy-shard-00-02-qqthk.mongodb.net:27017/Collection_tracker_private?ssl=true&replicaSet=Billy-shard-0&authSource=admin&retryWrites=true&w=majority";

const server = express();

const fileStorage = multer.diskStorage({

  destination: (req, file, cb) => { //both parameters are functions called by multer that handle where and how the file is stored

    //first parameter is an error message, in this case its null because there is no error
    cb(null, "images")//?Second paramter is the place where to store the incoming file
  },

  filename: (req, file, cb) => {//both parameters are functions called by multer that handle where and how the file is stored

    //first parameter is an error message, in this case its null because there is no error
    cb(null, Math.floor(1000 + Math.random() * 9000) + "-" + file.originalname);//?Second paramter is the file name which we want to save it as
  }

});

server.use(helmet())

server.use((req, res, next) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();

})

server.use(bodyParser.json());

server.use((req,res,next) => {

console.log(req.body)
next()
})
//server.use(express.static(path.join(__dirname, 'public')));//Allow the html to connect to css pages

server.use(multer({storage : fileStorage}).any("image"))
server.use("./images", express.static(path.join(__dirname, "images")))

server.use(bodyParser.urlencoded({ extended: false }));//Set up the body parser

server.use(add_book_router)
server.use(delete_book_router)
server.use(search_for_book)
server.use(worth_buying)
server.use(fetch_books)
server.use(get_conditions)
server.use(set_image_url)


//* Database connection

mongoose
  .connect(
    MONGODBURI, { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(result => {
    server.listen(process.env.PORT || 4000);
    console.log("\n\x1b[36mServer running on port 4000\n")
  })
  .catch(err => {
    console.log(err);
  });



