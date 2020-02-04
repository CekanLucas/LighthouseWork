'use strict'

const args = require('minimist')(process.argv.slice(2));

console.log(args);
console.log(args.i);

/* 
he slice method, in this case, removes all prior array elements starting from the index passed to it as the parameter. Here we know that the argument we manually pass are stored starting from the second index, we passed 2 to the slice function. We then printed the entire args object. We also printed single element of the array using the named index i.e. "i", rather than the index number.
*/