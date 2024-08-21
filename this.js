// console.log(this) // give empty 

// function displayThis (){
//     console.log(this)
// }
// displayThis() //global obect

let myobj={
    name:'Pooja',
    age:18,
    myfn : function(){
       console.log(this.name)
    }
}


 myobj.myfn()  //give object itself

 let myobj2={
    name:'Pooja',
    age:18,
    myfn2 : function(){
       function myfn3(){
        console.log(this)
       }
       myfn3()
    }
}


 myobj2.myfn2()  //geting global object