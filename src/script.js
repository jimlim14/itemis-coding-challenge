/*** PROBLEM 1: SALES TAXES ***/

/* BASIC INFORMATION
1) basic sales tax -> 10% (except books, food, medical products)
2) import tax -> 5% (everything, no exemptions)
3) np/100 should round up to the nearest 0.05
*/

const {
	checkItemDetails,
	extractInformation,
	calculatePriceAndTax,
} = require('./helper');
const { BASIC_TAX, IMPORT_TAX, TAX_ITEMS } = require('./constant');

function receiptDetails(itemDetails) {
	let receipt = '';
	let totalPriceAfterTax = 0;
	let totalSalesTax = 0;
	// exit receiptDetails function if input is invalid, else proceed.
	if (!checkItemDetails(itemDetails)) {
		return 'invalid input';
	} else {
		for (let itemDetail of itemDetails) {
			// extract information from individual itemDetail and store in an object itemInfo
			const itemInfo = extractInformation(itemDetail);
			const [priceAfterTax, salesTax] = calculatePriceAndTax(
				itemInfo,
				TAX_ITEMS,
				BASIC_TAX,
				IMPORT_TAX
			);
			receipt += `${itemInfo['amount']} ${
				itemInfo['name']
			}: ${priceAfterTax.toFixed(2)}\n`;
			totalPriceAfterTax += priceAfterTax;
			totalSalesTax += salesTax;
		}
		receipt += `Sales Taxes: ${totalSalesTax.toFixed(2)}\n`;
		receipt += `Total: ${totalPriceAfterTax.toFixed(2)}`;
	}
	console.log(receipt);
	return receipt;
}

module.exports = receiptDetails;
