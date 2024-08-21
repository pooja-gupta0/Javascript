function printfirstName ( firstName,cb){
    console.log(firstName)
    cb('Gupta')
}

function printlastName (lastName){
    console.log(lastName)
}
printfirstName('Pooja',printlastName)  //callback function


const isEven =(n)=>{
    return n%2==0
}

let printresult = (evenfn,num) =>{
    const isnumEven=evenfn(num)
    console.log(`The Number ${num} is Even Number ${isnumEven}`)
}

printresult(isEven,4)