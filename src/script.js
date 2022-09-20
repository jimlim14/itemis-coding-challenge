/*** PROBLEM 1: SALES TAXES ***/

/* BASIC INFORMATION
1) basic sales tax -> 10% (except books, food, medical products)
2) import tax -> 5% (everything, no exemptions)
3) np/100 should round up to the nearest 0.05
*/

const { checkItemDetails, extractInformation, calculatePriceAndTax } = require('./helper');

const basicTax = 10;
const importTax = 5;
let imported = false;
let receipt = '';
const taxItems = ['music CD', 'perfume'];

function receiptDetails(itemDetails) {
	// exit receiptDetails function if input is invalid, else proceed.
	if (!checkItemDetails(itemDetails)) {
		return 'invalid input';
	} else {
		for (let itemDetail of itemDetails) {
			// extract information from individual itemDetail and store in an object itemInfo
			const itemInfo = extractInformation(itemDetail);
			const [priceAfterTax, salesTax] = calculatePriceAndTax(
				itemInfo,
				taxItems,
				basicTax,
				importTax
			);
		}
	}

}

module.exports = receiptDetails;
