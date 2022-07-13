// const a = ''
// const b = ''

// function sameCase(a, b) {
//      //if either c OR d are not letters return -1
//      if(a.toUpperCase() === a.toLowerCase() || b.toUpperCase() === b.toLowerCase()) {
//         return -1
//      }
//     //if c and d are are same case letters, return 1
//     else if ((a == a.toUpperCase() && b == b.toUpperCase()) || (a == a.toLowerCase() && b == b.toLowerCase())) {
//         return 1
//         //if c and d are letters, but NOT same case, return 0
//     } else {
//         return 0
//     }
// }

// function removeChar(str) {
//     return str.slice(1, -1)
// }

// const arr = [-2, 1, 2, 3]
// let positiveSum = (arr) => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) { 
//             arr[i] = 0
//             sum += arr[i]
//         }
//         return sum
//     }
// }


// EXERCISE: You get an empty array of numbers, return the sum of all of the positive ones
// // If there is nothing to sum, the sum is default to 0
// const arr = []
// function positiveSum(arr) {
//     let negatives = [];
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.length < 0) {
//             sum = 0
//         } else if (arr[i] < 0) {
//         negatives.push(arr[i]);
//       } else {
//         sum += arr[i];
//       }
//     }
//     return sum;
//   }

//   //BETTER PRACTICE METHOD BELOW: 
//   function positiveSum(arr) {
//     let total = 0;    
//     for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
//       if (arr[i] > 0) {                   // if arr[i] is greater than zero
//         total += arr[i];                  // add arr[i] to total
//       }
//     }
//     return total;                         // return total
//   }

//EXERCISE: You are given a number and have to make it negative. If the number is already negative, no change required.

// // function makeNegative(num) {
// //     if (num > 0) {
// //         return -num
// //     } else if (num < 0) {
// //         return num
// //     } else {
// //         return 0
// //     }
// // }

// BETTER PRACTICE METHOD BELOW: 
// function makeNegative(num) {   
//     return -Math.abs(num);   // Math.abs(-1) is 1 
//   }

// EXERCISE: Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// function boolToWord(bool) {
//     if (bool == true) {
//         return 'Yes'
//     } else 
//     return 'No'
// }

// EXERCISE: Simple, remove the spaces from the string, then return the resultant string.
// x = ''

// function noSpace(x) {
//     console.log(x)
//     return x.replaceAll(' ', '').trim();
// }

// EXERCISE: Given an integer or a floating-point number, find its opposite.
// function opposite(number) {
//     if (number < 0) {
//         return Math.abs(number)
//     }    
//     return -Math.abs(number)
//   }

// //BETTER PRACTICE METHOD BELOW: 
// function opposite(number) {
//     return(-number);
//   }

// // EXERCISE: Complete the solution so that it reverses the string passed into it.
// const str = ''

// function solution(str){
//     return str.split('').reverse().join('') //.split('') returns a new array of split elements; .reverse() returns reversed array; .join('') joins all elements back into string
//   }

// // EXERCISE: Convert a number to a string
// function numberToString(num) {
//     return `${num}`;
//   }

//   //BETTER PRACTICE METHOD BELOW: 
// function numberToString(num) {
//     return num.toString();
// }

// EXERCISE : Write a function called repeatStr which repeats the given string exactly n times. 
// Example: RepeatStr(5, "Hello") // "HelloHelloHelloHelloHello" 

// function repeatStr (n, s) {
//     let newStr = '' //creating new empty string
//     while (n > 0) {
//         newStr += s // same as newStr = newStr + s
//         n -- // subtracting 1 each time it loops
//     }
//     return newStr
//   } 

// EXERCISE: Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
// function isDivisible(n, x, y) {
//     if (n % x === 0 && n % y === 0) {
//         return true
//     }
//     return false
// }

// //BETTER PRACTICE METHOD BELOW: 
// function isDivisible(n, x, y) {
//     return n % x === 0 && n % y === 0
//   }

// EXERCISE: Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this: Sam Harris => S.H

// const name = ''
// function abbrevName(name){
//     const splits = name.split(' ', 2)
//     const firstName = splits[0]
//     const lastName = splits[1]
//     const firstNameLetter = firstName.charAt(0).toUpperCase()
//     const lastNameLetter = lastName.charAt(0).toUpperCase()
//     return(`${firstNameLetter}.${lastNameLetter}`)
// }

// //BETTER PRACTICE METHOD BELOW: 
// function abbrevName(name){
//     let nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
//   }

// EXERCISE: Given an array of integers, return a new array with each value doubled.
// const x = [2, 2, 2, 2, 2, 2]
// const doubledArray = []

// function maps(x){
//     for (let i = 0; i < x.length; i++) {
//         let dub = x[i]
//         let dubb = dub * 2
//         doubledArray.push(dubb) 
//     }
//     return doubledArray
// }
// *** TRY ABOVE CODE AGAIN WITH MAP**


// EXERCISE : Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

// const array = []
// let sum = 0

// function find_average(array) {
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]
//     }
//     let average = sum / array.length
//     console.log(average)
//     // return 0;
//   }

// EXERCISE: Create a Grocery List using DOM manipulation and forms 
//Must refresh once submitting, and add new product and qty to a list below
// const form = document.querySelector('#form')
// const listContainer = document.querySelector('#list')

// form.addEventListener('submit', function (e) {
//     e.preventDefault() // stays on site without moving to another page
//     const productInput = form.elements.product //can access elements by name
//     const qtyInput = form.elements.qty
//     addInput( productInput.value, qtyInput.value )
//     productInput.value = '' // resets it back to empty
//     qtyInput.value = '' //resets it back to empty 
// })

// //created a new function 
// const addInput = ( productInput, qtyInput ) => {
//     const newInput = document.createElement('li')
//     newInput.append(qtyInput)
//     newInput.append(` ${productInput}`)
//     listContainer.append(newInput)
// }

//EXERCISE: Whenever an input event is fired on the input element, update the h1 so that it displays 'Welcome, ' plus the current value from
// the text input. If the input goes back to being empty, update the h1 so that it once again says 'Enter Your Username'
// const input = document.querySelector('input')
// const h1 = document.querySelector('h1')


// input.addEventListener('input', function (e) {
//     h1.innerText = `Welcome, ${input.value}`
//     if (input.value === '') {
//         h1.innerText = 'Enter Your Username'
//     }
// }) 

//EXERCISE: Create a function which translates a given DNA string into RNA.
// Example: 'GCAT' => 'GCAU'

// let dna = ''
// function DNAtoRNA(dna) {
//     return dna.replaceAll('T', 'U')
// }

//using regex
// let dna = ''
// function DNAtoRNA(dna) {
//     return dna.replace(/T/g, 'U')
// }

// EXERCISE: You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

// let a = []

// function check(a, x) {
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === x) {
//             return true
//         }
//     }
//     return false
// }

// //BETTER PRACTICE METHOD BELOW: 
// const check = (a,x) => a.includes(x); 

//EXERCISE: Get the sum of 2 arrays

// let arr1 = [-2,2,2]
// let arr2 = [2,2,2]
// let sumArr1 = 0
// let sumArr2 = 0

// function arrayPlusArray(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         sumArr1 += arr1[i]
//     }
//     console.log(sumArr1)
//     for (let j = 0; j < arr2.length; j++) {
//         sumArr2 += arr2[j]
//     }
//     console.log(sumArr2)
//     return sumArr1 + sumArr2
// }


// console.log(arrayPlusArray(arr1, arr2))

//EXERCISE:  Calculate BMI
//Write function bmi that calculates body mass index (bmi = weight / height^2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// function bmi(weight, height) {
//     let bmiCalc = weight / (height ** 2)
//     if (bmiCalc <= 18.5) {
//         return 'Underweight'
//     } else if (bmiCalc <= 25.0) {
//         return 'Normal'
//     } else if (bmiCalc <= 30.0) {
//         return 'Overweight'
//     } else {
//         return 'Obese'
//     }
//   }

//EXERCISE: Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// function greet(name){
//     return `Hello, ${name} how are you doing today?`
// }

//EXERCISE: Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//     return str.replace(/[^aeiou]/gi, "").length;
// }


//EXERCISE: Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// function XO(str) {
//     let x = 0, 
//         o = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === "x") {
//             x++;
//         } else if (str[i].toLowerCase() === "o") {
//             o++;
//         }
//     }
//     return x === o;
// }

// //BETTER PRACTICE: 
// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
//   }

//EXERCISE: Shortest Word
//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.

// function findShort(string) {
//     let words = string.split(' ') //turns into an array
//     let shortest = words.reduce((shortestWord, currentWord) => {
//         return currentWord.length < shortestWord.length ? currentWord : shortestWord
//     }, words[0])
//     return shortest.length
// }

//EXERCISE: Odd or even?
// Given a list of integers, determine whether the sum of its elements is odd or even.

// function oddOrEven(array) {
//     let initialValue = 0
//     const sumWithInitial = array.reduce(
//         (previousValue, currentValue) => previousValue + currentValue,
//         initialValue)
//         if (sumWithInitial % 2 == 0) {
//             return "even"
//         } else {
//             return "odd"
//         }
// }