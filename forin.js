// In Javascript ,The for in loop allows you to loop through the properties of an object
// The statement of code found within the loop body will execute once for each property of object

// var colors = {
//     primary:'Red',
//     secondary : 'White',
//     tertiary : 'Black'
// }
// syntax for in loop
//  for(var color in colors){
//     console.log( color +  '->' +colors[color])
//  }

 var colorArray=['greeen','black','purple','red','yellow','pink']

 for(var color in colorArray){
    // console.log(colorArray[color])

    // for  get index number
    console.log(color + '->' + colorArray[color])
 }