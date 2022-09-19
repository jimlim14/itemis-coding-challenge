/*** PROBLEM 1: SALES TAXES ***/

/* BASIC INFORMATION
1) basic sales tax -> 10% (except books, food, medical products)
2) import tax -> 5% (everything, no exemptions)
3) np/100 should round up to the nearest 0.05
*/

const checkItemDetails = require('./helper');

function receiptDetails (itemDetails) {
  if (!checkItemDetails(itemDetails)) {
    return 'invalid input';
  } else {
    
  }
}


module.exports = receiptDetails;