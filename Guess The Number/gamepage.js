var y = Math.floor(Math.random() * 10 + 1);
var guess = 1;
  
function submit(){
var x = document.getElementById("guess_field").value;

if (x == y){
alert("CONGRATULATIONS!!!"+player_name+"  YOU GUESSED IT RIGHT IN " + guess + " GUESS ");
guess = 1;
}
else if(x>y){
guess++;
alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else{
guess++;
alert("OPPS SORYY!! TRY A GREATER NUMBER");
}
}
function playAgain(){
y = Math.floor(Math.random() * 10 + 1);
}