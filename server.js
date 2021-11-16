var express = require('express');
var app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const router = require("./routes/women")

const Mongo_Url= process.env.MONGODB_URL;
mongoose.connect(Mongo_Url,{
    useNewUrlParser : true,
    UseUnifiedTopology : true
})
.then(()=> console.log("database connected"))
.catch((err)=> console.log(err))

//middelware
app.use(express.json())
app.use(router);

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});