// import{calculate} from './calc'

const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT ||3000; 
const express = require("express");
const app = express();
const alert = require('alert');
const User = require("./db/models/contactmsg");
const Register = require("./db/models/signup");
const calc = require("./calc");
const mongoose = require('mongoose');
const exp = require("constants");
require("./db/conn");

const bodyparser = require("body-parser");
const { response } = require("express");

app.use(express.static(path.join(__dirname, '../templates')));
const staticPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

app.set("view engine","hbs");
app.set("views", staticPath);
hbs.registerPartials(partialPath);
//app.use(express.static(staticPath));

app.use(express.urlencoded({extended:false}));


app.post("/calculate",(req,res)=>
{
    result= calc.calculate();
    res.render("calculator",{score:result});
    // console.log(`The sscore is: ${result}`);

})

app.post("/signup",async (req,res)=>{
    try{

        const password = req.body.pwd;
        const conf_password = req.body.conf_pwd;

        if(password==conf_password)
        {
            const reguserData = new Register(req.body);
            await reguserData.save();
            res.status(201).render("home");

        }else{
            res.send("passwords are not matching");
        }
        
    }catch(error){
        res.status(400).send(error);
    }
});

app.post("/login",async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.pwd;

        const useremail = await Register.findOne({semail:email});

        if(useremail.pwd === password)
        {
            res.status(201).render("home")
        }
        else{
            res.send("password are not matching");
        }

    }catch(error){
        res.status(400).send("Invalid Email")
    }
})


app.get("/home",(req,res)=>{
    res.render("home");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.get("/",(req,res)=>{
    res.render("signup");
});

app.get("/about",(req,res)=>{
    res.render("aboutus");
});

app.get("/calculator",(req,res)=>{
    res.render("calculator");
});

app.get("/dashboard",(req,res)=>{

    res.render("dashboard");
});

app.get("/api/dashboard",(req,res)=>{

    const array = Register.collection.find({}).toArray((err,result)=>{
            if(err) throw err
            res.send(result)
    })

    
    
});

app.get("/instructions",(req,res)=>{
    res.render("instructions");
});

app.post("/footer",async (req,res)=>{
    try{
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("home");
    }catch(error){
        alert("Message Send Successfully!");
        res.status(500).send(error);
        
    }
})



app.post("/calculator",function(req,res)
{
    const appliance = parseInt(req.body.water)
    if(appliance>7)
    {
        result = 350;
        res.render("calculator",{score:result});
    }
    else if(appliance<=7 && appliance>5)
    {
        result = 320;
        res.render("calculator",{score:result});
    }
    else if(appliance<=5 && appliance>3)
    {
        result = 280;
        res.render("calculator",{score:result});
    }
    else if(appliance<=3)
    {
        result = 210;
        res.render("calculator",{score:result});
    }
    // console.log(`The sscore is: ${result}`);

})


app.listen(port);