// Write a function check, which, given a number, returns whether it is valid or not (according to the Luhn Algorithm).

// all these numbers should be valid according  to luhn algorithm

const validNumbers = [
  79927398713,          4024007131603143,
  4556829948104551,     2221002357118491,
  5260688374990576,     5388715375288432,
  375432723648285,      374767804052670,
  343325566823545,      6011571506592207,
  6011832631017852,     3541420321987984,
  3542743858295847,     5415427565437970,
  5418946272926667,     5498711327011227,
  30445759542559,       30048174265374,
  30046585381897,       36951173552839,
  36508453086159,       36538749796790,
  6762056071829094,     5893291417744335,
  6762079019378495,     4917427636538539,
  4913798850139269,     4026997137637541,
  6374915912887050,     6378911524218384,
  6383065036682703
];

/* --- Steps ---
1. Start from right include every second digit

2. Double number if doubling result in a two digit number then add the digits of the product

3. Take the sum of the digits

4. if modulo 10 = o ie number ends in a zero it is a valid number */

const check = num => {
  const set1 = String(num).split('').reverse().filter(
    (el,i) => {
      return i % 2 !== 0 ? true : false;
    }
  ).reverse().map(
    el => {
      const double = Number(el) * 2;
      const addDigitOfProducts =
        Number(String(double).split('')[0]) +
        Number(String(double).split('')[1]);
      return double > 9 ? addDigitOfProducts : double;
    }
  );

  const set2 = String(num).split('').reverse().filter(
    (el,i) => {
      return i % 2 === 0 ? true : false;
    }
  ).reverse().map(el=>Number(el));
 
  const sum = [...set1, ...set2].reduce(
    (acc, cur) => {
      return acc + cur;
    }
  );
 
  return sum % 10 === 0 ? 'Yes it is!' : 'No, it isn\'t!';
};

const testNum = arr => {
  arr.forEach(num => {
    console.log(`Number:\t${num} is Luhn appropriate? ${check(num)}`);
  });
};
testNum(validNumbers);