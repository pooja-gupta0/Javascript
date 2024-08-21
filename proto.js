let myobj={}

console.log(myobj)

let person={
    name:'Pooja',
    age:18
}

console.log(person)
// console.log(person.hasOwnProperty("name"))  // hasOwnProperty is buil in in js and find the (written)has in attached fuction is or not
console.log(person.hasOwnProperty("gender"))


//construct a function
function person1(_name,_age){
    this.name=_name
    this.age=_age
}

let person2=new person1('Pooja',34)

console.log(person2)