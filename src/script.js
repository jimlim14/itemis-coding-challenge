/*** PROBLEM 1: SALES TAXES ***/

/* BASIC INFORMATION
1) basic sales tax -> 10% (except books, food, medical products)
2) import tax -> 5% (everything, no exemptions)
3) np/100 should round up to the nearest 0.05
*/

const {checkItemDetails, extractInformation} = require('./helper');

const salesTax = 10;
const importTax = 5;
let imported = false;
let receipt = '';

function receiptDetails (itemDetails) {
  // exit receiptDetails function if input is invalid, else proceed.
  if (!checkItemDetails(itemDetails)) {
    return 'invalid input';
  } else {
    for (let itemDetail of itemDetails) {
      const itemInfo = extractInformation(itemDetail);
      
    }
  }
  console.log(receipt);
}

module.exports = receiptDetails;