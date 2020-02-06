/* Create a function called wrapLog() that takes in a function (callback) and a string (name) and returns a function that internally invokes (calls) callback during its execution and also 
logs 
  - the name, 
  - input parameters
  - return value 
  of the callback function */

const wrapLog = function (callback, name) {
  return (...args) => 
    console.log(
      '\nThe name of the function is:',
      arguments['1'],
      '\nThe arguments are:',
      ...args,  
      '\nThe returned value is:',
      arguments['0'].apply(this,[...args])
    )
};

const area = function (x, y) {
  return x * y;
};

const logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

const volume = function (x, y, z) {
  return x * y * z;
};
const logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24