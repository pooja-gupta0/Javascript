// you need to sum of every element in array 

let num=[1,2,3,4,5,6,6,7,5,3]
let sum=0
for(let i=0;i<num.length;i++){
    sum=sum+num[i]
}

let mul=1
console.log(sum)
for(let i=0;i<num.length;i++){
    mul=mul*num[i]
}
console.log(mul)


//reduce

let result = num.reduce(function(acc,value){
    let updatesum=acc+value
    return updatesum
},0)
console.log(result)

let product = num.reduce(function(acc,value){
    let updateproduct=acc*value
    return updateproduct
},1)
console.log(product)