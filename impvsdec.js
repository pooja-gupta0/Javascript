//we will given a number and check whose square is even or not

// Imperetive way of writing code
const a=5;
let asquared=a*a;

let isEven;
if(asquared %2==0){
    isEven=true
}

else{
    isEven=false
}

console.log(isEven)

// declearative way of writing code

const checkForSquare =(x) => (x*x%2===0 ? true :false)

console.log(checkForSquare(5))