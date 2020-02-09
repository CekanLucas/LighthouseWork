// To access to another file 
const sayHelloTo = require('./myModule');

// Just to check the value of what we just required here
console.log('sayHelloTo: ', sayHelloTo);

sayHelloTo('Bernie');

// add this line to the end of the file.
module.exports = sayHelloTo;