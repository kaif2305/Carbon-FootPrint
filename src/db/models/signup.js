const mongoose = require("mongoose");
const validator = require("validator");


const registerSchema = mongoose.Schema({
    sname:{
        type:String,
        required:true,
        minLength:3
    },
    semail:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Invalid email id")
            }
        }
    },
    pincode:{
        type:Number,
        required:true,
        minLength:3

    },
    pwd:{
        type:String,
        required:true,
        minLength:3
    },
    conf_pwd:{
        type:String,
        required:true,
        minLength:3
    }
})

const Register = mongoose.model("Register",registerSchema);


module.exports = Register;