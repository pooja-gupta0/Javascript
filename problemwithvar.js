var a= 34

var a=45  // redeclaration of a
console.log(a)


if ( a===45){
    var b=90
    console.log(b)
}

// variables declared with var keyword are not blocked scoped they are function scoped
console.log(b)

function test() {
    var c=100
    console.log(c)
}

test()
console.log(c)