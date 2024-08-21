// you have to check for even no. in an array and put them in a separeate array

let numbers=[2,4,1,5,67,34,56,23,9]
let evenArray=[]
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        evenArray.push(numbers[i])
    }
}

console.log(evenArray)

//filter array
// filter return a new array it will return all those elements that match the specific condition
// if the condition is true it will return that element and if the condition is false it will discard that element

let number=[2,4,1,5,67,34,56,23,9]
let evenNum = number.filter(function(n){
    return n%2==0
}) 
console.log(evenNum)

// another example

const transaction=[1000,2000,3000,4000,-5000,-3000,6000]

let deposittransition=transaction.filter(function(n){
    return n>0
})
console.log(deposittransition)