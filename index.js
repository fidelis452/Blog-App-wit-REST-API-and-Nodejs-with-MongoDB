const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");

dotenv.config();
app.use(express.json());
mongoose.connect("mongodb+srv://fidelis:fidelis@blog.wyny7.mongodb.net/blog?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("Connected to mongo Db"))
  .catch((err)=>console.log(err));

  app.use("/api/auth",authRoute)
  app.use("/api/users",usersRoute)

app.listen("4000", () =>{
    console.log("background is running");
});