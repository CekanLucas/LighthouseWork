// calculates the total sales and total tax, grouped by company.

// Data 

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const calculateSalesTax = (salesData,taxRates) => {
  let ans = [];

  salesData.forEach(firm => {
    const totalSales = firm.sales.reduce(
        (acc,cur) => {
          return acc += cur;
        }
    );
    const totalTaxes = totalSales * taxRates[firm.province];

    const obj = {
      'totalSales': totalSales,
      'totalTaxes': totalTaxes
    };

    ans.push(obj);
    
  });

  console.log(ans); 
  
}
calculateSalesTax(companySalesData,salesTaxRates)

// --EXPECTED RESULTS--

/* 
const results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/