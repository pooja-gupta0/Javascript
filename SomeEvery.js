//some method

// Some : Condition check : To get true or false based on a conditions
// it will return true if even 1  element satisfies the condition

const transaction=[-1000,-2000,3000,-4000,-5000,-3000,-6000]
 
let resultSome = transaction.some(function(n){
    return n>0
})

console.log(resultSome)

// every method = every element should satisfy condition

let resultEvery = transaction.every(function(n){
    return n>0
})

console.log(resultEvery)


