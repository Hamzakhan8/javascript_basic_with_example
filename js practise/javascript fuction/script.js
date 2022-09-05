//function is using to recall that functionality whenever its needed . 

    // example here
// function mul(){

//    var a=2;
//    var b=4;
//    var c=a+b;
//    return c;
// }

// alert(mul());


//giving value to a function: example

// function square(length,width){

//      alert(length+width);

// }
// square(4,5);
// giving to parameter to a function
// and argument are 4 and 5 which is value of length and width


// function isEven(num)
// {
   //return  even num if number is not even number then will return false
//     return num % 2 ===0;    
// }

// function factorial(num)
// {
//showing  factorial of number 
//     var result=1;
//     for(var i=2 ; i <= num; i++){

//         result*=i;

//     }
//     return result;

// }

//scope function example

var num=8; 
//first step i have declare variable num and give a value to it 8. 
//so if you see in the bottom i have add one value to num 
function doMath(){
    //fourth step it will add one more value to num and second step we have seen that 8 become 9 
    //now add one more value it will become a 10
    num+=1; 
    
    if(num%5==0) 
    {
    //in this step we are modulus of 5==0  10 divide by 5 so reminder is 0 so condition is true  
        return true;
    //it will return true .
    }
    else
    {
        return false
    }
}

//secondly it will come to this step and on value to num 8+1=9.
doMath();
//third step it will run this function domath().



