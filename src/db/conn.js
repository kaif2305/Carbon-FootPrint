const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
  
mongoose.connect("mongodb://0.0.0.0:27017/Cfootprint", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex:true
}).then(()=>{
    console.log("connect successful");
}).catch((error)=>{
    console.log(error);
})
 

