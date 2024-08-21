class person{
    constructor(_name,_age){
        this.name=_name
        this.age=_age
    }

    welcome(){
        console.log(`Welcome ${this.name}`)
    }
}

class teacher extends person{
     constructor(_name,_age,_classStrength){
       super(_name,_age)
       this.classStrength=_classStrength
     }
     test(){
        super.welcome()
     }
}


let person1=new person('Pooja', 18)
let teacher1=new teacher('Pooja',20,34)
teacher1.welcome()
console.log(teacher1)
console.log(person1)
