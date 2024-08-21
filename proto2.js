function person0(_name,_age){
    this.name=_name
    this.age=_age

}
person0.prototype.getNameAndAge =function(){
    console.log(`I am ${this.name} and my age is ${this.age}`)
}

let person=new person0('Pooja',34)
let person2=new person0('Taniya',40)

console.log(person)
console.log(person2)