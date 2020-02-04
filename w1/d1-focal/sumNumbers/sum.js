const args = process.argv;
const arr = args.slice(2);
console.log(Number(arr[0]) + Number(arr[1]));

/* --Example--
> node sum.js -2 -4
-6
*/