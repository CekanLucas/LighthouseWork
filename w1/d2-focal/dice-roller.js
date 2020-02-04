// Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice.

/*/ example input/output
> node dice-roller.js 3
  Rolled 3 dice: 2, 6, 5 /*/

const args = process.argv;
const numDice = args[2];
// console.log(numDice)

function diceRolls(){
  let i = 1;
  let str = '';
  while ( i <= numDice ) {
    str += Math.floor(Math.random() * 6 + 1) + ', ';
    i++;
  }
  // slice off last comma
  return str.trim().slice(0,str.lastIndexOf(','));
}
console.log(`Rolled ${numDice} dice: ${diceRolls()}`);