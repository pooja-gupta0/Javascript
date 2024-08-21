// use in browers


console.log(this) //empty object


function displayThis (){
         console.log(this)
     }
 displayThis() //global object


 let myobj={
    name:'Pooja',
    age:18,
    myfn : function(){
       console.log(this.name)
    }
}


 myobj.myfn()  //object return itself



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


 myobj2.myfn2() //global object