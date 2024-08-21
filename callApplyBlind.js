let person1={
    firstname:'Pooja',
    lastname:'Gupta',
    age:18,
   
}
personaldetails=function(city,student){
    console.log(`Hi I am ${this.firstname} ${this.lastname} and I am ${this.age} years old , I am From ${city} and a student of ${student}`)
    }
let person2={
    firstname:'Rashmi',
    lastname:'Gupta',
    age:22,
    // personaldetails:function(){
    // console.log(`Hi I am ${this.firstname} ${this.lastname} and I am ${this.age} years old`)
    // }
}

//call method
personaldetails.call(person2,'Jalandhar','MBA')

//apply method
personaldetails.apply(person2,['Jalandhar','MBA'])

//bind method
 let myfn=personaldetails.bind(person2,'Jalandhar','MBA')

console.log(myfn)
myfn()

// person1.personaldetails()
// person2.personaldetails()