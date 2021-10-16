const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect("mongodb+srv://fidelis:fidelis@blog.wyny7.mongodb.net/blog?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("Connected to mongo Db"))
  .catch((err)=>console.log(err));
app.listen("3200", () =>{
    console.log("background is running");
});