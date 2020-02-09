// Create a function maxProfit, which, given a list of stock prices for a given day, returns the maximum profit that could have been made by buying a stock at the given price and then selling the stock later on.

// For example if the input is: [45, 24, 35, 31, 40, 38, 11] then your program should return 16 because if you bought the stock at $24 and sold it at $40, a profit of $16 was made and this is the largest profit that could be made. If no profit could have been made, return -1.

const maxProfit = arr => {
  const maxProfit = arr.map(
   (buyPrice, i) => {
     return arr.slice(i + 1).sort(
      (a, b) => {
        return a > b ? -1 : 1;
      }
    )[0] - buyPrice;
   }
  ).sort(
    (a, b) => {
      return a > b ? -1 : 1;
    }
  ).slice(1)[0]; // first element will return NaN so slice it off

  console.log(maxProfit)
}
maxProfit([45, 24, 35, 31, 40, 38, 11])

// Solved by creating and sorting a sub array to get best sales price after getting buy price