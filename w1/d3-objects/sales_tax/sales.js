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
  let fans = {}; //final answer

  salesData.forEach(firm => {
    const totalSales = firm.sales.reduce(
        (acc,cur) => {
          return acc += cur;
        }
    );
    const totalTaxes = totalSales * taxRates[firm.province];

    const obj = {
      'name': firm.name,
      'totalSales': totalSales,
      'totalTaxes': totalTaxes
    };

    ans.push(obj);
    
  });
  // console.log(ans); 
  
  ans.forEach( firm => {
    if( fans[firm.name] === undefined){
      fans[firm.name] = {
        'totalSales': firm.totalSales,
        'totalTaxes': firm.totalTaxes
      }
    }
    else {
      fans[firm.name].totalSales += firm.totalSales;
      fans[firm.name].totalTaxes += firm.totalTaxes;
    }
  })

  console.log(fans);

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