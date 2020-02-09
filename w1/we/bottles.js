/*
every two empty bottles, you can get one free (full) bottle of pop
every four bottle caps, you can get one free (full) bottle of pop
Each bottle of pop costs $2 to purchase

Given the above parameters, write a program so that you can figure out how many total bottles of pop can be redeemed given a customer investment from argv command line

Investment	Total Bottles
10	                  15
20	                  35
30	                  55
40	                  75

*/

const args = process.argv.slice(2);
const chalk = require("chalk");
const initialInvestment = args[0];//in dollars
const initialBottles = initialInvestment / 2;

let ansObj = {
  'Initial Investment':initialInvestment,
  'initial Bottles':initialBottles,
  'Total Bottles': initialBottles,
  'Total Earned':{
    'Bottles':0,
    'Caps': 0
  },
  'Leftovers':{
    'Bottles':initialBottles,
    'Caps':initialBottles
  }
};


const recycle = () => {
  //calculate how much bottles and caps can be recycled
  const BottlesEarned = Math.floor(ansObj.Leftovers.Bottles / 2);
  const CapsEarned = Math.floor(ansObj.Leftovers.Caps / 4);
  
  //recurse until you cant earn any more from leftovers
  if (BottlesEarned < 1 && CapsEarned < 1) {
    return;
  }
  
  //add to Total Earned
  ansObj["Total Earned"].Bottles += BottlesEarned;
  ansObj["Total Earned"].Caps += CapsEarned;
  
  //take out from leftovers
  ansObj.Leftovers.Bottles -= BottlesEarned * 2;
  ansObj.Leftovers.Caps -= CapsEarned * 4;
  
  //put back bottles and caps earned from recycling back to leftovers
  ansObj.Leftovers.Bottles += BottlesEarned + CapsEarned;
  ansObj.Leftovers.Caps += BottlesEarned + CapsEarned;
  
  
  //recursively repeat process
  recycle();
};
recycle(ansObj); //begin recursion

ansObj["Total Bottles"] =
ansObj["Total Earned"].Bottles +
ansObj["Total Earned"].Caps +
ansObj["initial Bottles"]; //calculate final total bottles

console.log(`You made a initial investment of ${chalk.green.bold('$' + initialInvestment)} with which you bought ${chalk.yellow(initialBottles + ' bottles')} of pop.\nEarning extra bottles from \n\trecycling bottles: ${chalk.blue.bold(ansObj["Total Earned"].Bottles + ' bottles')}  \n\trecycling caps: ${chalk.blue.bold(ansObj["Total Earned"].Caps + ' bottles')}  \nfor a grand total bottles earned of ${chalk.bgBlack.greenBright.bold(ansObj["Total Bottles"] + ' bottles')}`);

// console.log(ansObj);