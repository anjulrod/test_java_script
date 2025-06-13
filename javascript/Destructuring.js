// Array Destructuring

// Ques-Write code to extract the first and third elements into variables first and third.

// const colors = ["red", "green", "blue"];
//  let [first, , third]=colors
//  console.log(first);
//  console.log(third);

//  Ques-Use destructuring to get the second and fourth numbers.

//  const numbers = [10, 20, 30, 40];
//  let [, second, ,fourth]=numbers
//  console.log(second);
//  console.log(fourth);


// Ques-Swap values of two variables using array destructuring:

//  let a = 5, b = 10;
// [a,b]=[b,a]
// console.log("a", a);
// console.log("b", b);

// Ques-Use destructuring to get name and country.

// const user = { name: "Anjul", age: 21, country: "India" };
// let{
//     name, country} =user
// console.log(name);
// console.log(country);

// Ques-Use nested destructuring to extract city.

// const person = {
//   name: "Sam",
//   address: { city: "Mumbai", zip: 400001 }
// };

// const { address: { city } } = person;

// console.log(city);

// // Ques-Call this function with an object { name: "Neha", age: 23 }.
// function display({ name, age }) {
//   console.log(name + " is " + age + " years old");
// }

// display({name: "Neha", age: 20})


// const numbers = [1, 2, 3, 4, 5];
// let [first,...rest]=numbers
// console.log(first);
// console.log(rest);

const person = { name: "Sam", age: 22, country: "India" };

let {name,...other}=person
console.log(name);

const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];

console.log(merged); // [1, 2, 3, 4]

