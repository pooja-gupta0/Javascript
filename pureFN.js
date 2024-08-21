var a=5
//impure function= a changes value changes

function addImpure(x){
    console.log(x+a)
    a++
}

addImpure(2)  //5+2
addImpure(2)  //5+3
addImpure(2)  //5+4

//pure function = same i/p and got same o/p
//pure function with side effect
function addpure(x,a){
    console.log(x+a)
}
//calling multiple time got same value
addpure(2,3)
addpure(2,3)
addpure(2,3)
addpure(2,3)
addpure(2,3)

//pure function with no side effect
function addPure(x,a){
    return x+a
}

console.log(addPure(3,6))  // it written outside the function and does not depent any external factor