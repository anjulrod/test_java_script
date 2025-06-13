// let numbers = [5, 10, 15, 20];
// numbers.forEach(function(num){
//     console.log(num);
    
// })
// let names = ["Anjul", "Ravi", "Meena"];
// names.forEach(function(name){
//     console.log("Name: " + name);
// })

// let nums = [1, 2, 3, 4];
// let sum=0
// nums.forEach(num=> sum+=num)
// console.log(sum);

// let nums = [1, 2, 3, 4];
// let sum=0
// nums.forEach(function(num){
    // sum*num
// })
// console.log(sum);

// let nums = [2, 4, 6];
// let double=nums.map(num=> num * 2)
// console.log(double);

// let fruits = ["apple", "banana", "mango"]
// let upper=fruits.map(fruit=> fruit.toLocaleUpperCase())
// console.log(upper);

let users=[
    {fname: "Anjul", age:36},
    {fname: "Shlok", age:7},
    {fname: "Ankit", age:35},
]
let names=users.map(user=> user.fname)
console.log(names);

// let numbers = [2, 3, 4];
// let squre=numbers.map(num=> num * num)
// console.log(squre);

// let prices = [5, 10, 15];
// let rup=prices.map(rupes=> rupes * 80)
// console.log(rup);

// let fruits = ["apple", "banana", "cherry"];
// fruits.forEach((fruit, index)=> {
// console.log("Index" + index + ":"+ fruits);
// })
    
// let names = ["Ali", "Sara", "John"];
// let add=names.map(gender=> "Mr./Ms. " + gender)
// console.log(add);

// let people = [
//   { name: "Ali", age: 20 },
//   { name: "Sara", age: 25 },
//   { name: "John", age: 30 }
// ];    
// let ages=people.map(per=> per.age)
// console.log(ages);

//filter

// let numbers = [1, 2, 3, 4, 5, 6];
// let add=numbers.filter(num=> num %2===0)
// console.log(add);

// let names = ["Ali", "Sara", "Jonathan", "Meera", "John"];
// let value = names.filter(four=> four.length>4)
// console.log(value);

// let users = [
//   { name: "Ali", age: 17 },
//   { name: "Sara", age: 21 },
//   { name: "John", age: 15 },
//   { name: "Meena", age: 19 }
// ];
// let usr=users.filter(grt=> grt.age>=18)
// console.log(usr);

// let words = ["banana", "apple", "ball", "cat"];
// let bword=words.filter(word=> word.startsWith("b"))
// console.log(bword);

// let nums = [3, 12, 5, 18, 1];
// let grt=nums.filter(num=> num>10)
// console.log(grt);


//some

// let numbers = [4, -2, 7, 10];
// let neg=numbers.some(num=> num<=0)
// console.log(neg);

// let names = ["Sara", "Ali", "John", "Meera"];
// let worda=names.some(word=> word.startsWith("A"))
// console.log(worda);

// let strings = ["hello", "", "world"];
// let str=strings.some(str1=> str1==="")
// console.log(str);

//every

// let numbers = [1, 3, 5, 8];
// let pos=numbers.every(num=> num>=0)
// console.log(pos);


// let names = ["Ali", "Sara", "John", "Me"];
//     let wor=names.every(word=> word.length>3)
//     console.log(wor);
    
    //.flat

    // let arr = [1, 2, [3, 4]];
     
    // let result= arr.flat()
    // console.log(result);
    
    // let arr = [1, [2, [3, 4]]];
    // let result= arr.flat(2)
    // console.log(result);
    
    // let arr = [1, , 2, [3, , 4]];
    // let res=arr.flat()
    // console.log(res);

    //flatmap

    // let nums = [1, 2, 3];
    // let res= nums.flatMap(num=> [num, num * num])
    // console.log(res);
    
    // let sentences = ["hello world", "hi there"];
    // let res=sentences.flatMap(num=> num.split(" ")) 
    // console.log(res);
    
    // let nums = [1, 2, 3, 4];
    // let result=nums.flatMap(num=> num%2===0? num*2 : [])
    // console.log(result);
    
    //reduce

    // let words = ["Hello", " ", "World", "!"];

    // let res=words.reduce((acc, curr)=> acc + curr, "")
    // console.log(res);
    
    // let chars = ["H", "e", "l", "l", "o"];
    // let result=chars.reduce((acc, curr)=> acc + curr, "")
    //  console.log(result);

    //  let nums = [5, 10, 15];
    //  let result=nums.reduce((acc, curr)=> acc + curr)
    //  console.log(result);
     
    //  let nums = [2, 3, 4];
    //  let result=nums.reduce((acc, curr)=> acc * curr)
    //  console.log(result);
     

// let words = ["Java", "Script", "Is", "Fun"];
// let result=words.reduce((acc, curr)=>acc + curr )
// console.log(result);


// let words = ["hi", "hello", "world"];
// let result=words.reduce((acc, words)=> acc + words.length,0)
// console.log(result);

// let nums = [10, 45, 22, 99, 3];
// let max=nums.reduce((acc, curr)=>{
//     return curr > acc ? curr: acc})
//     console.log(max);
     
    // let users = [
//   { name: "Ali", age: 20 },
//   { name: "Sara", age: 25 },
//   { name: "John", age: 30 }
// ];

// let totalAge = users.reduce((acc, user)=> acc + user.age, 0);
// console.log(totalAge);
    
// let numbers = [1, 2, 3, 2, 4, 1, 5];
// let unq=numbers.filter((num, index)=>{
//     return numbers.indexOf(num)===index
// })
// console.log(unq);

let numbers = [1, 2, 3, 2, 4, 1, 5];
let unique=[...new Set(numbers)]
console.log(unique);

let num=[1,2,3,4,5,6]

// let i=0
// do{
//     console.log(num[i]);
//     i++    
// }        
//         while (i<num.length) {
            
//         }    
    

// for(let i=0; i<num.length; i++)
//     console.log(num[i]);
    
// let i=0
// while (i<num.length) {
// console.log(num[i]);
// i++ 
// }

num.forEach(i => console.log(i));

    
