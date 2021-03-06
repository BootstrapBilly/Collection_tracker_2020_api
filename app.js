//Core node
const path = require("path");

//routers
const router = require("./Routes/router")

//External
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require('mongoose');
const helmet = require("helmet")
const multer = require("multer")
const dotenv = require("dotenv")

dotenv.config()

//-File configuration
const MONGODBURI = `mongodb://Billy:${process.env.mongopw}@billy-shard-00-00-qqthk.mongodb.net:27017,billy-shard-00-01-qqthk.mongodb.net:27017,billy-shard-00-02-qqthk.mongodb.net:27017/Collection_tracker?ssl=true&replicaSet=Billy-shard-0&authSource=admin&retryWrites=true&w=majority`;

const MONGODBURIPRIVATE = `mongodb://Billy:${process.env.mongopw}@billy-shard-00-00-qqthk.mongodb.net:27017,billy-shard-00-01-qqthk.mongodb.net:27017,billy-shard-00-02-qqthk.mongodb.net:27017/Collection_tracker_private?ssl=true&replicaSet=Billy-shard-0&authSource=admin&retryWrites=true&w=majority`;

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

server.use(multer({storage : fileStorage}).any("image"))
server.use("./images", express.static(path.join(__dirname, "images")))

server.use(bodyParser.urlencoded({ extended: false }));//Set up the body parser

server.use(router)


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



