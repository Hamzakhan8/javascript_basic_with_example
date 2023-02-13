// here i have created an Array name color and value are red,blue,green at index 0,1,2
var color=['red','blue','green'];
console.log(color[0]);//here i have call color index 0 the output will be red

var color=Array();
// we can also declare like this 
//  EXAMPLE OF POP AND PUSH
// example of Pop() function

var color=['red','blue','green'];
    color.pop("white"); // pop  function  remove last ite of array , string ,undefined and null.
    console.log(color);

// example of push()


    var color=['red','blue','green']; 
// push function add item at the end of array , string ,undefined and null
    color.push()="green";
    console.log(color);



// SHIFT AND UNSHIFT
// SHIFT REMOVE ITEM FROM ARRAY AT THE FRONT OR 0 INDEX
// UNSHIFT ADD ITEM TO ARRAY AT THE FRONT OR 0 INDEX

// EXAMPLE OF SHIFT

var color=['red','blue','green'];
    color.unshift("white"); //output will be like this ['white','red','blue','green']

var color=['red','blue','green'];
    color.shift(); //output will be like this ['white','red','blue','green']

// index of FUNCTION TO FIND THE INDEX OF AN ITEM IN AN ARRAY
// example of indexof() 

var color=['red','blue','green'];

color.indexOf("blue"); //output 1

color.indexOf("red"); //output 0

//slice function copy part of array

var color=['red','blue','green','black','darkblue'];

var dark_color=color.slice(3,4);//output will be black and darkblue

// we also pass the entire array in slice function 
var dark_color=color.slice();//output ['red','blue','green','black','darkblue']
// just don't give slice indexes and it copy entire array . 







