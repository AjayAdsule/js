var a="ajay"
console.log(typeof a)  //string
a=10
console.log(typeof a)  //number
a=true;
console.log(typeof a) //boolean
a=5+null
console.log(typeof a) //number
a="5"+null
console.log(typeof a) //string
a="5"+2  
console.log(a)  //52
console.log(typeof a) // string

// i am doing number to string conversion
let str=55
str=String(str)
console.log(typeof str) //string

// i am doing a string to number conversion
let num="55"
num=Number(num)
console.log(num)
console.log(typeof num) //number

let k="ajay"
let z=k.charAt(0).toLocaleUpperCase().slice(1)
console.log(z)