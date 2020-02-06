// Pythagorian

// remember: z^2 = x^2 + y^2

const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
const result = input.map(el => {
  const zsqr = Math.pow(el.x,2) + Math.pow(el.y,2);
  return Math.sqrt(zsqr);
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);