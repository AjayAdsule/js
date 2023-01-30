// let a="ajay \n adsule"
// console.log(a)
// let b='ajay\t adsuie'
// console.log(b)

// //concanicate
// let str="ajay"
// let str1="adsule"
// console.log(str+" "+str1) // if you want a space 
// let str3=str.concat(str1)
// console.log(str3)

// var na="I am learning javascript & blockchain tecvhnology"
// // i am doing here susb-string manipulation
// var sub=na.substring(14,37)
// console.log(sub)
// // i want where blockchain starting number is
// console.log(na.indexOf("blockchain"))  //27


// var m="ajay"
// var l=m[0].toUpperCase()+m.substring(1)
// console.log(l)


// split()
// The split() method divides a string into an ordered list of two or more substrings and returns it, depending on the pattern, divider, or delimiter provided.
let sp="i am ajay"
// split string in space and store in array
//split string using the space character
let array= sp.split(" ")
console.log(array)

// split string without array
let array1 =sp.split("")
console.log(array1)



// from()
// The from() method of the Array class is the leading competitor for the split() method. It allows us to make an array from a data source. We can also use this to make an array from an iterable string.

var ar="i am blockchai devloper"
//string to array of character
var arr=Array.from(ar)
console.log(arr)



// Spread operator (…)
// The spread operator is another JavaScript feature that helps us to create an array from a string.

var nam="i am ajay"
// using spread opretor to convert into string
var arr=[...nam]
console.log(arr)



// 2. Check for a specific sequence in a string
// Similar to splitting, there are many ways to check for a specific sequence in a JavaScript string. The includes() method, indexOf(), or a regular expression can be used for such purposes. However, includes() is the most frequently used method for determining whether a string contains a letter or series of letters. It was specifically created for that purpose.

var nam="my name is ajay"
console.log(nam.includes("is"))  //true



// 3. Check if a string starts or ends with a specific sequence
// includes() checks for a specific sequence in an entire string. If you want to determine whether a string begins or ends with a specific substring, there are two specialized methods for that.

// The string method startsWith() determines whether a string begins with a specific substring. It will return true if the string begins with the specified substring. Otherwise, it returns false.

var text='my name is ajay'
console.log(text.startsWith("my"))  //true
console.log(text.startsWith("name")) //false

//endwith()method
//The endsWith() method allows us to determine whether a string ends with a specified string.
console.log(text.endsWith("s"))//false
console.log(text.endsWith("ajay"))//true
