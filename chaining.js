let arr=
[
    {name:'A', age:10 , gender:'M'},
    {name:'B', age:80 , gender:'F'},
    {name:'C', age:60 , gender:'F'},
    {name:'D', age:33 , gender:'M'},
    {name:'E', age:34 , gender:'F'},
    {name:'F', age:43 , gender:'M'},
    {name:'G', age:52 , gender:'M'},
    {name:'H', age:63 , gender:'F'}
]

// age of all Mens(male)
// let male=arr.filter(function(obj){
//     return obj.gender=='M'
// })

// let agesOmale= male.map(function(males){
//     return males.age
// })

// console.log(male)
// console.log(agesOmale)


//chaining method
let maleAge=arr.filter(function(obj){
    return obj.gender=='M'
}).map(function(males){
    return males.age
})
console.log(maleAge)

//from the transcition array filter out positive element and calculate the total amount

//filter and reduce method for that

const transaction=[-1000,2000,3000,-4000,-5000,3000,-6000]
let deposittransition=transaction.filter(function(n){
    return n>0
}).reduce(function(acc,value){
   let update=acc+value
   return update
},0)
console.log(deposittransition)