let randomNumber = Math.random()*3;
let computerChoice;



if(randomNumber>0 && randomNumber<=1){
  
computerChoice ='bat';

}
else if(randomNumber>1 && randomNumber<=2){
 computerChoice ='Ball'
}

else{
  computerChoice='Stump';
}
console.log(`computer choice is ${computerChoice}`);

 let resultmsg;

if(computerChoice ==='Ball'){
   resultmsg='user win.';

 
}

else if (computerChoice ==='bat'){
   resultmsg=`it's a tie.`;

}
else if (computerChoice ==='Stump'){
    resultmsg=`computer win.`;
   
  
}

alert(`you have chosen Bat . computer choice is ${computerChoice}  and ${resultmsg}`)