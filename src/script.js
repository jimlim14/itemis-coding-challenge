/*** PROBLEM 1: SALES TAXES ***/

/* BASIC INFORMATION
1) basic sales tax -> 10% (except books, food, medical products)
2) import tax -> 5% (everything, no exemptions)
3) np/100 should round up to the nearest 0.05
*/

const { checkItemDetails, extractInformation, calculatePriceAndTax } = require('./helper');

const basicTax = 10;
const importTax = 5;
const nonTaxItems = {
	food: ['chocolate'],
	books: ['book'],
	medical: ['pill'],
}
let receipt = '';
let totalPriceAfterTax = 0;
let totalSalesTax = 0;

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
				nonTaxItems,
				basicTax,
				importTax
			);
			receipt += `${itemInfo['amount']} ${itemInfo['name']}: ${priceAfterTax}\n`;
			totalPriceAfterTax += priceAfterTax;
			totalSalesTax += salesTax;
		}
		receipt += `Sales Taxes: ${totalSalesTax.toFixed(2)}\n`;
		receipt += `Total: ${totalPriceAfterTax.toFixed(2)}`;
	}
	return receipt;
}

module.exports = receiptDetails;
