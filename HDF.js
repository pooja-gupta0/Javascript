//higher order function 

let arr=[1,2,3,4,5]
let asqured=[]

for(let i=0;i<arr.length;i++)
{
    asqured.push(arr[i]*arr[i])
}
console.log(asqured)


// map
// map will loop through every element of your array and will perform specific operation that you have provided
// map method will always written you a new array with your result
const num=[1,2,3,4,5]
const squareNum=num.map(function(n){
    return n*n
})
console.log(squareNum)


// another example

const transaction=[1000,2000,3000,4000,-5000,-3000,6000]
const InDollor=80

// let transactionInDollor= transaction.map(function(n){
//     return n/80
// })
//map method
// let transactionInDollor=transaction.map((amount) =>{
//     return (amount/InDollor).toFixed(0)
// })
// console.log(transactionInDollor)

//using for each
let transactionInDollor=transaction.forEach((amount) =>{
    console.log((amount/InDollor).toFixed(0))
})
console.log(transactionInDollor)