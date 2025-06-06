// let arr1 = Array()
// let arr2 = Array(4)
// let arr3 = "".split('')
// let arr4 = []
// let arr5 = [1,2,3,4]
// let arr6 = Array(1,2,3,4)
// let arr7 = "1234".split('')
// console.log(arr1, arr2, arr3, arr4, arr5, arr6, arr7)

// let FrontEnd = ["HTML", "CSS", "Javascript", "React", "MongoDB"]
// FrontEnd[5]="Anjul"

// console.log(FrontEnd[4])
// console.log(FrontEnd.length)
// console.log(FrontEnd[FrontEnd.length-1])
// console.log(FrontEnd[50])
// console.log(FrontEnd)
// let str1 = "Angular"
// console.log(str1[4])
// str1[4] = "X"
// FrontEnd[80] = "VueJS"
// console.log(FrontEnd.length)
// console.log(FrontEnd)
// let arr10= "a"
// let arr11="b"
// let new_array = arr10.concat(arr11)
// console.log(new_array)
// console.log(arr10)

// console.log(FrontEnd.indexOf('VueJs'))
// console.log(FrontEnd.includes('React') )

// let new_array1 = FrontEnd.slice(1,FrontEnd.length)


// console.log("new_array1 ==> ", new_array1)
// FrontEnd.reverse()
// console.log("After ==> ", FrontEnd)

// 1- Print numbers from 1 to 10 using a for loop.
// for(i=1; i<=100; i++){
//     console.log(i)
// }
//2- Print even numbers from 1 to 20 using a while loop.

// let even=0
// while(even<=20){
//     if(even%2==0){
//         console.log(even);
//             }
//             even++
// }

// for(num=1; num<=10; num*5){
//     console.log("5 x" + num + "=" + num);
//     num++
// }
// let arry=["html", "Css", "Javascript"]
// for(let arry1=0; arry1<arry.length; arry1++){
//     console.log(arry[arry1]);
    
// }

//Use a do...while loop to print numbers from 1 to 5.
// let num=1
// do{
//     console.log(num);
// num++    
// }
// while(num<=5)

    //Print the sum of numbers from 1 to 100 using a loop.
// let num=2
//     for(num=0; num<=100; num+num){
//         console.log(num);
//         num+=2
//     }
// Reverse an array using a loop (without using .reverse()).

// let arry=[1,2,3,4,5,6,7,8,9,10]
// for(let arry1=arry.length-1; arry1>=0; arry1--)
    // console.log(arry[arry1]);
    
// Print only vowels from a given string using a for loop.
// Example: "JavaScript"

let alph="JavaScript";
let vov="aeiou"
for(let i=0; i<alph.length;i++){
    if(vov.includes(alph[i])){
        console.log(alph[i])
    }      
}

// let num=[10, 20, 30 ,40,50, 60]
// let result=0
// for(let i=0; i<num.length; i++){
//     result+=num[i]
//     console.log(result);
    
// }
// for(i=0; i<=10; i++){
//     console.log(i);
// }

    // for(i=0; i<=100; i++){
    //     if(i%2==0){
    //         console.log(i);
    //     }
    //     }

    //     let num=4
    //     for(table=1; table<=10; table++){
    //         console.log(num + "x" + table + "=" + table*num)
            
    //     }
        let color = ["red", "green", "blue", "yellow"]
        for(let colors=0; colors<color.length; colors++){
            console.log(color[colors]);
            
        }
let num= [20,30,40,50]
let result=0
for(let i=0; i<num.length; i++){
    result+=num[i]
    console.log(result);
    
}
    
let x=["ind", "Pak", "New","Aus"]
for(let i=0; i<x.length; i++){
    if(x[i].startsWith("N")){
        break
    }
    console.log(x[i]);
    
}

function add(a, b){
return a+b
}
// let res= add(5, 6)
// console.log(res);

function greet(name){
    console.log("Hello"+ name);   
}

// greet("Anjul")
// function add(a, b){
    // return a+b
// }
// let res=add(1,3)
// console.log(res);

 function value(name){
    console.log(name);
 }
value("Anjul")    
 
