/*** PROBLEM 1: SALES TAXES ***/

/* BASIC INFORMATION
1) basic sales tax -> 10% (except books, food, medical products)
2) import tax -> 5% (everything, no exemptions)
3) np/100 should round up to the nearest 0.05
*/

const checkItemDetails = require('./helper');

function receiptDetails (itemDetails) {
	// 1) loop through array of item details.
	// 2) extract amount of item, item name and item price, store in variable.
	//    - return error message if information cannot be extracted
	// 3) if inputs are valid, then proceed to extraction.
  checkItemDetails(itemDetails);
}


module.exports = receiptDetails;