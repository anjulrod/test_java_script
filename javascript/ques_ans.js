// LOOPS
// Write a for loop to print numbers from 1 to 10.
// for(let num=1; num<=10; num++){
//     console.log(num);
// }

// Print all even numbers between 1 and 20 using a loop.

// for(let i=1; i<=10; i++){
//     if (i % 2==0) {
//         console.log(i);
        
//     }
// }

// Use a while loop to print numbers from 5 to 1 in reverse.
// let i=5
// while (i>=1) {
// console.log(i);
// i--
// }

// Use a do...while loop to print numbers from 1 to 5.

// let num =0
// do {
//     num++
//     console.log(num);
    
// } while (num<5);

// Loop through an array of names and print each name.
// let names=["anjul", "ankit", "shlok"]
// for(let i=0; i<names.length; i++){
//     console.log(names[i]);
// }

// CONDITIONALS

// Write an if statement to check if a number is positive.
// let num=0
// if (num>0) {
// console.log("number is positive " +num);
// }
// else if(num<=0){
// console.log("number is neg " +num);
// }

// Use an if...else statement to check if a person is eligible to vote (age ≥ 18).

// let age=18
// if (age>18) {
// console.log("you are eligible for vote " +age);    
// } else {
// console.log("you are not eligible for vote " +age);   
// }

// Write a program to print “Pass” if marks are above 40, else print “Fail”.

let pass=41
if (pass>40) {
    console.log("pass " +pass);    

} else {
console.log("fail " +pass);
    
}

// Use if...else if...else to grade a score:
/* 90+ = A
75–89 = B
below 75 = C  */

// let grade=40
// if (grade>=90) {
// console.log("grade: A");    
// }
// else if(grade>=75){
// console.log("grade: B");
// }
// else{
//     console.log("grade: C");
// }

// What is a ternary operator? Write a simple example.
// let age1=20
// let result= age1>18? "adult" : "not adult"
// console.log(result);

// How do you check if a number is odd or even using if condition?

// let num=10
// if (num % 2==0) {
//     console.log("number is odd " +num);
// }
// else{
//     console.log("number is even " +num,);
// }

// FUNCTIONS

// Write a function that prints "Hello, World!".
function greet() {
    console.log("Hello, World");
}
greet()

// Write a function that takes two numbers and prints their sum.

// function add(num, num1) {
//    let sum= num+num1
//    console.log(sum);
//    return sum
// }
// add(10, 20)

// Create a function that returns the square of a number.

// function sqr(num) {
//     return num*num  
// }
// console.log(sqr(2));
// console.log(sqr(3));

// Write a function that takes a name and prints "Hello, [name]".

// function fname(name) {
// console.log("hello, " + name);
    
// }
// fname("Anjul")

// Convert a regular function to an arrow function.

// let fname=(name)=> `Hello ${name}`
// console.log(fname("Anjul"));

// How do you call a function inside another function?

// function greet(name) {
//     return "hello, " + name
// }
// function welcome(name) {
//     let name1=greet(name)
//     console.log(name1);
// }
// welcome("Anjul")

