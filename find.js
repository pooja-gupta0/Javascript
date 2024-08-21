// find returns the first element of an array that satisfy the condition

const transaction=[1000,2000,3000,4000,-5000,-3000,6000]

let FiratWidrawal= transaction.find(function(n){
    return n<0
})

console.log( 'first withdrawal =>' +FiratWidrawal)


//find index no.
let FiratWidrawalIndex= transaction.findIndex(function(n){
    return n<0
})

console.log('Index =>'+FiratWidrawalIndex)