class person{
    constructor(_name,_age){
        this.name=_name
        this.age=_age
    }

    welcome(){
        console.log(`Welcom ${this.name}`)
    }
}

let person1=new person('Pooja',18)
let person2=new person('Gupta',18)
let person3=new person('Rashmi',22)
let person4=new person('Anurag',25)
let person5=new person('Hariohm',47)


person1.welcome()

console.log(person1)

person2.welcome()
console.log(person2)

person3.welcome()

console.log(person3)

person4.welcome()

console.log(person4)

person5.welcome()

console.log(person5)
