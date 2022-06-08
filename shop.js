// 1,2.variables, types
const shopName = "Coffee House"
let owner = "Dalida";
const lct = "Almaty";
const est = 2022;
let allNight = false;
let franchisee = null;
let partner;
let open=true;

// 3.objects
let popularDrink = {
    name: "latte",
    price: 1200,
    cupSize: "classic"
}

popularDrink.discount="10%";
delete popularDrink.discount;

let k="color";
popularDrink[k] = "brown";

let label = "red", price = "1000";
let unpopularDrink = {label, price};

unpopularDrink.del=false;
delete unpopularDrink.del;
console.log(popularDrink);
delete popularDrink.color;
console.log(popularDrink);

popularDrink.pr = function(){
    console.log(this.name + " " + this.price+ " "+ this.cupSize);
}
popularDrink.pr();

// 4.arrays
let drinks = ["raf" ,"americano", "latte", "cappucino", "black tea", "latte"];
drinks.pop();
drinks.push("bubble tea");
drinks.shift();
drinks.unshift("frappuccino");
let cnt=drinks.length;

let drinkNames= drinks.filter(word => word.length > 3);
console.log(drinkNames);
let mp=drinks.map(drink => drink);
let sl = drinks.map(drink => drink.slice(1));
console.log(sl);
console.log(mp);

function sumPrice(...drink){
    let cnt=0;
    for(let i=0; i< drink.length; i++){
        cnt+=drink[i];
    }
    // console.log("rest: "+cnt);
}
sumPrice(1000, 3000, 2900);

let info=["Coffee House", "2022", "Almaty"];
let intro=["Coffee place: ", ...info];
console.log(intro);

// 5. control flow
let clientNumber=10;
if(clientNumber == "20" || clientNumber === "20"){
    open=false;
}
let helper=null;
let barista = helper ?? "Almaz";
// console.log(barista);
let todo;
todo = clientNumber>10 ? true:false;
// console.log(todo);
let orderFinished="yes";
if(orderFinished){
    todo=true;
}else{
    todo=false;
}
// console.log(todo);
let discount;
switch(clientNumber){
    case 10:
        discount=5;
        break;
    case 20:
        discount=10;
        break;
    default:
        discount=0;
}
console.log(`discount is ${discount}`);

// 6.loops
let toPay=0;
let orderPrice=[1000, 2000, 1100, 1100, 2000, 3400];
for (let i=0; i<orderPrice.length; i++){
    toPay+=orderPrice[i];
}

toPay=0;
let orderSize = 0;
let i =0;
while(orderSize < 5){
    toPay+=orderPrice[i]*1.1;
    i++;
    orderSize++;
}console.log(toPay);

toPay=0;
orderSize=0;
i=0;
do{
    toPay+=orderPrice[i]*1.1;
    i++;
    orderSize++;
}while(orderSize<5);
console.log(toPay);

// 7
function simpleFunction(){
     console.log(drinks.length);
}
let functionExpression = function(){
    console.log(drinks.length);
}
let arrowFunctions = () => console.log(drinks.length);
let destructuring = () => console.log( `the most sold drink is ${popularDrink.name} of ${popularDrink.cupSize} size which costs ${popularDrink.price} tg.`);
console.log(`functions:`);
simpleFunction();
functionExpression();
arrowFunctions();
destructuring();

// 8.named, as, default
import {listIngredients, lengthIngredients} from "./e.js";
listIngredients();

import{listIngredients as l1, lengthIngredients as l2} from "./e.js";
l1();
l2();

import coffee from "./e.js";
console.log(coffee);



