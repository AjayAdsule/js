// let pr= new Promise((resolve,reject)=>{
//     // resolve('your problem is solve')
//     reject("your problem is not solve")
   
// })
// let caller=()=>{
//     pr.then((result)=>{
//         console.log(`thanks for reaching us ${result}`)
//     })
//     pr.catch((error)=>{
//         console.log(`thanks for reaching us ${error.message}`)
//     })
// }
// caller()

// let a=[10,45,45,48,4,57,40,55]
// let b=a.map((val)=>{
//     return val+1;
// })
// console.log(b)

let obj={
    name:"ajay",
    age:22,
    occupation:"blockchain devloper",
    subject:{
        name:"javascript",
        exp:"fresher"
    }
}

let a=[10,25,42,65,05,12,52,2]
let b=a.filter((i)=>{
    return i%2===0;
})
// console.log(b)

class students{
    constructor(subject,marks,percentage){
        this.subject=subject;
        this.marks=marks;
        this.percentage=percentage;
        this.details=()=>{
            if(this.marks>35){
                console.log(`in ${this.subject} you got ${this.marks} and you passed`)
            }
            else{
                console.log(`in ${this.subject} you got ${this.marks} and you fail`)
            }
        }
    }
}
// let ajay=new student("javascript",25)
// let mahesh=new student("python",75)
// let dinesh=new student("golang",65)
// ajay.details()
// mahesh.details()
// dinesh.details()

let p=new Promise((resolve,reject)=>{
    resolve("you are pass")
    reject('you are fail')
})
let caller=()=>{
    p.then((result)=>{
        setTimeout(() => {
            console.log(`congrulaion you are ${result}`)
        }, 2000);
    })
}
// caller()

// i am making a function that will do upper case a word
function upper(word){
    
    return word.toUpperCase();
}
// console.log(upper("ajay"))

// this function will do filter the number
let arr=[12,14,56,41,45,0,45,12,01,22,5]
let nu=arr.filter((num)=>{
    if(num>10){
        console.log(num)
    }
    
})
// i am creating class which extend the next class
class student{
    constructor(name,collage_name,admission_date,passing_year){
        this.name=name;
        this.collage_name=collage_name;
        this.admission_date=admission_date;
        this.passing_year=passing_year;
        this.information=()=>{
            console.log(`my name is ${this.name} my collage name is ${this.collage_name} my admissin date is ${this.admission_date} i am passout at ${this.passing_year}`)
        }
    }
}
let student1=new student("Ajay","somiya collage",2018,2021)
student1.information()

let objs=[

    {
        name:"ajay",
        age:22,
        dob:1999
    },
    {
        name:"dinesh",
        age:25,
        dob:2000
    },
    {
        name:"dinesh",
        age:26,
        dob:1995
    }
]
console.log(objs)