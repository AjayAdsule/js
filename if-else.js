age=17
let card="no"
if(age>=18 && card=="yes"){
    console.log("you can vote")
}
else{
    console.log("you cannot vote")
}
//else if method
// i am creating a if else statement with elseif 
// i am doing voting right with the help of function

function val(age,card){
    if (age>=18 && card=="yes"){
        console.log("you can vote")
}
else if(age>=18 && card=="no"){
    console.log("please make voting card")
}
else{
    console.log("you cannot vote")
}
}
// val(17,"no")


//the same thing will do in nested if else statement
function nes(age,card){
    if(age>=18 ){
        if(card=="yes"){
            console.log("you can vote")
        }
        else{
            console.log("plese make you voter card")
        }
    }
    else{
        console.log("you cannot vote")
    }
}
nes(18,"no")


// ternary opretor
// in below example we set a number 0 for login and 1 for logout we use ternary opretor
let login=1
let option= login==0 ? "login" : "logout"
            // condotion     0         1
console.log(option)



// we leran switch condition

let ag=18
switch(ag){
    case 18:
        console.log("you cane vote")
        break;
    case 17:
        console.log("you cannot vote")
        break;
    default:
        console.log("wrong input")

}
