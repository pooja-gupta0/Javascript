//objects are key value pairs
// var person={
//     firstname : 'Pooja',
//     lastname : 'Gupta',
//     age: 18,
//     Carname : 'Mercedes',
//     Ownscar: "True"
// };

// console.log(person)

//dot notation
// console.log(person.age)

//bracket notaion
// console.log(person['firstname'])
var cap={
    firstname : 'steve',
    lastname : 'johns',
    age : 102,
    friends : [ 'riya','suman','rohan'],
    isAvenger : true,
    adress : {
        state : 'new york',
        city :{
            name : 'jalandhar',
            pincode : 144004
        }

    }
}
// console.log(cap.friends[2])
// console.log(cap.adress.city.pincode)
cap.isAvenger = false
// console.log(cap)

//add properties 
cap.movies = ['sec','esd','dreas']
console.log(cap)

//delete property
delete cap.age
console.log(cap)
