const mongoose = require("mongoose");
const womenSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        require:true,
        unique:true
    },
    name:{
        type:String,
        require:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
        default:"100m"
    }
 
},{timestamps:true})
//creating a new collection
module.exports =  mongoose.model("womenRanking",womenSchema) 