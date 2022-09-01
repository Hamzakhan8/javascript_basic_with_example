
//this is my secret number
var number=5;

//let the user guess tha number

var guess=prompt("Guess your number");



if(Number(guess)===number){

    alert("you got it right");

}
else if(Number(guess)>number){

    alert("sorry you are wrong");   
}
else if(Number(guess)<number){
    alert("sorry you are wrong");
}
else{

    alert("try again");
}