
const calc =function calculate(){
    var score=0;

    //RADIO BUTTON

    getSelectedValue = document.querySelector('input[name="people"]:checked'); 

    if(document.getElementById('one').checked) {     
        score = score+12;
    }   
    else if(document.getElementById('two').checked) {   
            score = score+10;
    } 
    else if(document.getElementById('three').checked) {    
            score = score+8;
    } 
    else if(document.getElementById('four').checked) {   
            score = score+6;
    } 
    else if(document.getElementById('five').checked) {   
            score = score+4;
    }
    else 
    {   
        "You have not selected any Number of People";   
    }   

    // SELECT BUTTON
    const size = document.querySelector('.house_size');  
    if(size.selectedIndex == 0){
        score =  score+4;
    }
    else if(size.selectedIndex==1){
        score =  score+7;
    }
    else if(size.selectedIndex==2){
        score =  score+10;
    }

    //MACHINE CHECKBOX


    //FREQUENCY OF APPLIANCES
    var appliances = document.getElementByName("appliances").value;
    if(parseInt(appliances)>9){
        score=score+3;
    }
    else if(parseInt(appliances)<=9&&parseInt(appliances)>4){
        score=score+2;
    }
    else if(parseInt(appliances)>2){
        score=score+1;
    }


    //PURCHASE NUMBER BOX
    var purchase = document.getElementByName("purchase").value;
    if(parseInt(purchase)>7){
        score=score+10;
    }
    else if(parseInt(purchase)<=7&&parseInt(purchase)>5){
        score=score+8;
    }
    else if(parseInt(purchase)<=5&&parseInt(purchase)>3){
        score=score+6;
    }
    else if(parseInt(purchase)<=3&&parseInt(purchase)>1){
        score=score+4;
    }
    else{
        score=score+2;
    }

    //ELECTRICITY CONSUMPTION
    var electricity = document.getElementByName("electric_bill").value;
    score = score+((electricity*11.7)/100);

    //GAS CONSUMPTION
    var gas = document.getElementByName("gas_con").value;
    score = score+((gas*13)/100);

    //RECYCLE
var count=0;
    
var glass=document.getElementById("glass");
var plastic=document.getElementById("plastic");
var paper=document.getElementById("paper");
var alu=document.getElementById("alu");
var steel=document.getElementById("steel");
var foodw=document.getElementById("foodw");

if(glass.checked==true)
    count+=1;
if(plastic.checked==true)
    count+=1;
if(paper.checked==true)
    count+=1;
if(alu.checked==true)
    count+=1;
if(steel.checked==true)
    count+=1;
if(foodw.checked==true)
    count+=1;

    //FOOD PREFERENCE
    const food = document.querySelector('.food_category');  
    if(food.selectedIndex==0){
        score =  score+4;
    }
    else if(food.selectedIndex==1){
        score =  score+8;
    }
    else if(food.selectedIndex==2){
        score =  score+2;
    }

    //KIND OF FOOD

    typeoffood = document.querySelector('input[name="food_type"]:checked'); 

    if(typeoffood.value== "pack") {    
        score = score+8;
    }   
    else if(typeoffood.value == "home") {   
            score = score+4;
    } 
    else if(typeoffood.value == "whole") {    
            score = score+2;
    } 
    else {   
    "You have not selected anything";   
    }   

    //FREQUENCY RESTAURANT

    var rest = document.getElementByName("restaurent").value;
    if(parseInt(rest)>4){
        score=score+6;
    }
    else if(parseInt(rest)==3){
        score=score+4;
    }
    else if(parseInt(rest)<2){
        score=score+2;
    }

    //TRANSPORTATION

    //FUEL TYPE
    fuel = document.querySelector('input[name="Fuel_type"]:checked'); 

    if(fuel.value == "petrol") {   
        score = score+8;
    }   
    else if(fuel.value == "disel") {    
        score = score+4;
    } 
    else if(fuel.value == "electric") {    
        score = score+2;
    } 
    else {   
    "You have not selected anything";   
    }   

    //POLLUTION

    const pollution = document.querySelector('.pollution');  
    if(pollution.selectedIndex == 0){
        score =  score+10;
    }
    else if(pollution.selectedIndex == 1){
        score =  score+8;
    }
    else if(pollution.selectedIndex == 2){
        score =  score+4;
    }

    //MILEAGE

    var mileage = document.getElementByName("car_mil").value;
    if(parseInt(mileage)>25){
        score=score+2;
    }
    else if(parseInt(mileage)<=25&&parseInt(mileage)>20){
        score=score+4;
    }
    else if(parseInt(mileage)<=20&&parseInt(mileage)>10){
        score=score+8;
    }
    else if(parseInt(mileage)<10){
        score=score+10;
    }


    //TYPE

    const type = document.querySelector('.car_type');  
    if(type.selectedIndex == 0){
        score =  score+4;
    }
    else if(type.selectedIndex == 1){
        score =  score+6;
    }
    else if(type.selectedIndex == 2){
        score =  score+10;
    }
    else if(type.selectedIndex == 3){
        score =  score+12;
    }

    //pub
    var pub = document.getElementByName("pub").value;
    if(parseInt(pub)>450){
        score=score+12;
    }
    else if(parseInt(pub)<=350 && parseInt(pub)>250){
        score=score+10;
    }
    else if(parseInt(pub)<=250&&parseInt(pub)>100){
        score=score+4;
    }
    else if(parseInt(pub)<100){
        score=score+2;
    }

    //priv
    var priv = document.getElementsByName("priv").value;
    if(parseInt(priv)>350){
        score=score+12;
    }
    else if(parseInt(priv)<=350&&parseInt(priv)>200){
        score=score+10;
    }
    else if(parseInt(priv)<=200&&parseInt(priv)>25){
        score=score+8;
    }

    //FLIGHT
    var flight = document.getElementByName("flight").value;
    if(parseInt(flight)>20){
        score=score+20;
    }
    else if(parseInt(flight)<=20&&parseInt(flight)>15){
        score=score+6;
    }
    else if(parseInt(flight)<=15){
        score=score+2;
    }
    console.log(score);
    return score;
}

module.exports.log = calc;