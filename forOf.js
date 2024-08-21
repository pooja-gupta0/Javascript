// The for of statement create a loop iterating over iterable object,
// including : built in string , array , array like object nodelist and also map and set

var score=[39,50,49,50,39]

//syntax

for(var scores of score){
    console.log(scores)
}
//method - entities()
let colors =[ 'green','blue','pink','black']

for([index,color] of colors.entries()){
    console.log(index + '->' + color)
}

//strings

var str="scaler"
for(var c of str){
    console.log(c)
}