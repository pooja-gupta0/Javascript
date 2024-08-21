class animal{

    sound(){
        console.log('Animals have different sounds')
    }
}

class dog{

    sound(){
        console.log('Dogs barks')
    }
}
class cat{

    sound(){
        console.log('Cats mewos')
    }
}

let animal1= new animal()
let dog1=new dog()
let cat1= new cat()

animal1.sound()
dog1.sound()
cat1.sound()

console.log(animal1)
console.log(dog1)
console.log(cat1)