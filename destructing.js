// The destructureing assignment syntax is a javascript expression that's makes it possible to upack values from array, or from property of object, into distinct variable

// let arr =['Hi',  , 'I' , 'am' , 'Pooja']

// let a= arr[3]
// let b=arr[0]
// console.log(a)
// console.log(b)

// let [x,s,c,d,e,f] = arr
//  console.log(x)


 // destruction the object
 let myobj={
    name: 'adam',
    age: 24,
    gender:'M',
    address :{
        city : 'jalandhar',
        state : 'Punjab'
    }
 }

//  let { name , age, gender,address} = myobj

//  console.log(name)
//  console.log(age)
//  console.log(gender)
//  console.log(address)

let { name:n , age:m, gender:v,address :{ city : c}} = myobj

console.log(n)
console.log(m)
console.log(v)
console.log(c)