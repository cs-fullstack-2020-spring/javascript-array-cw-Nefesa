// # javascript_array_cw

// ### Exercise 1

// - Create the following array ```["John", "Paul", "George", "Pete"]```
// - Console.log ONLY Pete’s name from the list
// - Change Pete’s name to ‘Ringo’
// - Console.log the list
// - Add the name ‘Yoko’ to the list
// - Console.log the list

let specialNames = ["John", "Paul", "George", "Pete"]
console.log("Pete"); // !!: print the name using some property of the array...not just the string value
specialNames.push("John", "Paul", "George", "Ringo") // : this will add ALL of these strings to the end of your current array
console.log("John", "Paul", "George", "Ringo"); // !!: this is not how to print an array, these are just string values
specialNames.push('Yoko'); 
console.log("John", "Paul", "George", "Ringo","Yoko"); 

// ### Exercise 2
// - Write a program that asks the user to enter 4 ages. Save each of the ages into an array.
// - Console.log the list of names
// - Delete the third age.
// - Change the second element (NOT index 2, the second element) to a different age.
// - Console.log the list of names


let ageList1 = prompt("Enter 10");
let ageList2 = prompt("Enter 12")
let ageList3 = prompt("Enter 14")
let ageList4 = prompt("Enter 16")
console.log('10','12','14','16'); // !! : this is not how you print an array
// console.log(ageList4.pop());

// ### Exercise 3
// Write a program that asks the user to enter any four names into an array. If they enter the name Kenn, ignore it and don't enter it in the array. Console.log the resulting array.

// ```javascript
// Example 1
// Enter the first name: Kevin
// Enter the second name: Erin
// Enter the third name: Meka
// Enter the fourth name: Autumn

// console.log Results:
// [Kevin, Erin, Meka, Autumn]

// Example 2
// Enter the first name: Kenn
// Enter the second name: Erin
// Enter the third name: Kenn
// Enter the fourth name: Autumn

// console.log Results:
// [Erin, Autumn]

