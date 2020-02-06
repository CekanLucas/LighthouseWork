// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach((name,i) => {
    if (name === "Waldo") {
      found(i);   // execute callback
    }
  });
}

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);