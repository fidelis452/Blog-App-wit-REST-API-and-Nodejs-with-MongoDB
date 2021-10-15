var express = require("express");
var app = express();
var dotenv = require("dotenv");
var mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(console.log("Connected to mongo Db"))
.catch((err)=>console.log(err));
app.listen("3100",() =>{
    console.log("background is running");
});