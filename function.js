// Functions & Methods

// Basic function syntax 
function firstfunction () {
    console.log("Hello World!") ;
}
firstfunction() ; // calling a function


// Parameters Function
function inputfunction (msg) {    // parameters ---> Inputs
    console.log(msg) ;
}
inputfunction("I'm learning JS") ;  // Argument


// Multiple Inputs function (Calculation Sum)
function sum(a , b) {
    add = a + b ;
    console.log(add) ;
    return add ;
}
let finalans = sum(2 , 4) ;
console.log(finalans) ;      


// Arrow Function
const arrowfunction = (a , b) => {
    return a+b ;
}   
let finalanswer = arrowfunction(10 , 1000) ;
console.log(finalanswer) ;


// Pratice Q-1  ------ (Finding Number of Vowels in a String)
function vowelscount (str) {
    let count = 0 ;
    for (let char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count ++ ;
        }
    }
    return count ;
}

console.log("=====================================================") ;

// By using arrowfunction
const countvowels = (str) => {
    let count = 0 ;
    for (let char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count ++ ;
        }
    }
    return count ;
}


// foreach loop for arrays
let arr = ["Rahim yar khan" , "lahore" , "karachi" , "bwp"] ;
arr.forEach((val) => {
    console.log(val.toUpperCase()) ;
})

console.log("=====================================================") ;

// Practice Q-2 ------ Finding square of numbers using for each
let numbers = [2 , 4 , 6 , 8 , 10] ;
let Square = (num) => {
    console.log(`${num} * ${num} = ` , num * num) ;
}

numbers.forEach(Square) ;

console.log("=====================================================") ;

// Map Method
let number = [1 , 2 , 3] ;

let map = number.map((val) => {
    return val * val ;
})
console.log(map) ;  // It create's a new array and dont make any change in the origional one

console.log("=====================================================") ;

// Filter Method
let mixnumbers = [1 , 2 , 3 , 4 , 5 , 3005] ;
let EvenNumber = mixnumbers.filter((val) => {
    return val % 2 == 0 ;
})
console.log(mixnumbers) ;
console.log(EvenNumber) ;

console.log("=====================================================") ;

// Practice Q-3 ----- Using filter method
let StdMarks = [23 , 45 , 89 , 98 , 97 , 92 , 99 , 60 , 43] ;
let StdHighMarks = StdMarks.filter((val) => {
    return val >= 90 ;
})
console.log("Marks =" , StdMarks) ;
console.log("Score 90+ = " , StdHighMarks) ;

console.log("=====================================================") ;

// Practice Q-5
let n = prompt("Enter a Number") ;
let ar = [] ;

for (let i = 1 ; i <=n ; i++) {
    ar [i -1] = i ; 
}
console.log(ar) ;

let Sum = ar.reduce((res , curr) => {
    return res + curr ;
})
console.log(Sum) ;

let product = ar.reduce((res , curr) => {
    return res * curr ;
})
console.log(product) ;
