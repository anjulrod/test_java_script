/* function add(a,b) {
    return a+b
}
console.log(add(8,3));

function split(value) {
return value.split("")    
}
let result=split("I m Anjul")
console.log(result);

// (function() {
// let name="Anjul"
// console.log("Hello, " + name);  
// })()


// self invoking

// (function(num1) {
//   let sqr = num1 * num1;
//   console.log(sqr);
// }) (10)

// expression function

/*let squre=function(num1) {
  let sqr = num1 * num1;
  console.log(sqr);
} 
squre(10)
squre(20);     */

/*function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}                                 

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Anjul", sayGoodbye);

let country= ["IND", "PAK", "SL", "AUS"]
function callback(el) {
console.log(el.toLowerCase());  
}
country.forEach(callback)  */

// let country= ["IND", "PAK", "SL", "AUS"]
// country.forEach((el => console.log(el.toLowerCase()));

// for index

// let country= ["IND", "PAK", "SL", "AUS"]
// country.forEach((el, i) => console.log(el.toLowerCase(), i));

// for arrow
//   let fruits=["Apple", "Mango"]
//   fruits.forEach(fruit => console.log(fruit));

  
//   function outer() {
//   let name = "Anjul";

//   function inner() {
//     console.log("Hello " + name);  }

//   return inner;
// }

// const greet = outer(); // outer runs, returns inner
// greet();         

  
// function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const add = counter();

// add(); 
// add();

// callback function

// function greet(name, callback) {
// console.log("Hello " + name);
// callback();
// }
// function bye() {
// console.log("GoodBye!!!");
// }
// greet("Anjul",bye)

// closures

// function createcounter(){
//   let count=0;
//   return function(){
//     count++;
//     console.log(count);
//   }
// }
// let counter=createcounter();
// counter();
// counter();
// counter();

// // arrow function
// let add=(a,b)=>a+b
// console.log(add(1,4));

// const number=[1, 2, 3, 4, 5]
// const add = number.map(num=> num+=num)
// console.log(add);

