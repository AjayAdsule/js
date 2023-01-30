let pr=new Promise((resolve,reject)=>{
    resolve("you are pass")
})
let call=()=>{
    pr.then((result)=>{
        setTimeout(() => {
            console.log(`congrats ${result}`)
        }, 2000);
    })
}
call()