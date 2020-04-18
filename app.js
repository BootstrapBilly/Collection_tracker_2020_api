//Core node
const path = require("path");

//routers
const add_book_router = require("./Routes/add_book")
const delete_book_router = require("./Routes/delete_book")
const search_for_book = require("./Routes/search_for_book")
const worth_buying = require("./Routes/worth_buying")
const fetch_books = require("./Routes/fetch_books")

//External
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require('mongoose');
const helmet = require("helmet")

//-File configuration
const MONGODBURI = "mongodb://Billy:bjc123@billy-shard-00-00-qqthk.mongodb.net:27017,billy-shard-00-01-qqthk.mongodb.net:27017,billy-shard-00-02-qqthk.mongodb.net:27017/Collection_tracker?ssl=true&replicaSet=Billy-shard-0&authSource=admin&retryWrites=true&w=majority";

const server = express();

server.use(helmet())

server.use((req,res,next) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
  
})

server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, 'public')));//Allow the html to connect to css pages
server.use(bodyParser.urlencoded({extended: false}));//Set up the body parser



server.use(add_book_router)
server.use(delete_book_router)
server.use(search_for_book)
server.use(worth_buying)
server.use(fetch_books)


//* Database connection

mongoose
  .connect(
    MONGODBURI, { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(result => {
    server.listen(process.env.PORT || 4000);

  })
  .catch(err => {

  });



