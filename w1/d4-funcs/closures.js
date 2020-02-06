/* const outer = () => {
  const x = 10;

  const inner = function() {
    console.log("The value of x is: " + x);
  }
  return inner;
};

const foo = outer();
foo(); */

/* // Imediately Invoked Function Expression (IIFE)
const foo = (function() {
  const x = 10;

  const inner = function() {
    console.log("Value of x is: " + x);
  }
  return inner;
})(); // Notice the () at the end,
      // which will immediately invoke the function,
      // assigning the returned value (inner) to foo

foo(); */

// -- Unique Id Generator -- 

// The following is a function that makes use of a closure to return a unique ID every time you call it (starting at 1 and incrementing by 1 each time).

function makeIdGenerator() {
  let id = 0;

  // The following is the closure function
  return function() {
    // This inner function accesses and assigns the value of
    // the variable id, which was defined in the parent function
    id += 1;
    return id;
  }
}

// makeIdGenerator returns a function which is assigned to
// the variable nextId
const nextId = makeIdGenerator();

// console.log(nextId()); // Logs: 1
// console.log(nextId()); // Logs: 2

// The following function implements the roll of a die; it returns a random number between 1 and 6 each time it is called.

const rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
}

// console.log(rollDie());  // 1 (for example)

// however, instead of a random die, we want to create a cheat die that would let us predict the next number. Create a function called makeLoadedDie() which returns a function that when called, seems to generate random numbers between 1 and 6, but in fact returns numbers in a row from a hardcoded list.

function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  return function() {
    currentroll = nextId() - 1;
    return `On roll ${currentroll + 1} you rolled a ${list[currentroll]}`;
  }
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6