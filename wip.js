//...L*E*C*T*U*R*E N*O*T*E*S...

/*
let bestMeat = "brisket";
console.log(bestMeat);

let greatMeat;
greatMeat = "ribs";
console.log(greatMeat)

console.log(bestMeat);
var bestMeat = "brisket";//is found, but found with a value of UNDEFINE
                        //var was HOISTED
                        //LET will NOT get CANNOT ACCESS; LET is not HOISTED
*/

/*
function hi(){
    console.log(num);
    if(5 < 10){
        let num = 2;
        console.log(num);
    }
}
hi();//return undefine, bcs num is protected inside F:hi
*/

// if creating in an if statement or a loop that were you use it

function personalDice(name){
    return function(){
        // generate random number between 1 and 6
      const newRoll = Math.floor(Math.random() * 6);
      console.log(`${name} rolled a ${newRoll}`)
    }
  }
  
  const dansRoll = personalDice("Dan");
  
  const zoesRoll = personalDice("Zoe");
  
  
  dansRoll();
  dansRoll();