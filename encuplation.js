function person(_name,_age){
    var name=_name
    this.age=_age

    this.getname=function(){
        return name
    }
}

let person1= new person("Pooja",18)

console.log(person1.getname())