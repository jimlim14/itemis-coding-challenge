function checkItemDetails(itemDetails) {
	for (let itemDetail of itemDetails) {
		const splitItemDetail = itemDetail.split(' ');
		const amount = Number(splitItemDetail[0]);
		const price = Number(splitItemDetail[splitItemDetail.length - 1]);

		if (!itemDetail.includes(' at ') && !itemDetail.includes(' at')) return 'missing "at"';
		if (isNaN(amount)) return 'missing amount';
		if (isNaN(price)) return 'missing price';
	
		return true;
	}
}

function extractInformation(itemDetail) {
	
	// use to store information extracted from itemDetail
	const itemInfo = {};
	
	// use to store item name
	let name = '';

	// split itemDetail by ' at ' and access 1 index for price
	const price = itemDetail.split(' at ')[1];

	// split itemDetail by ' at ' and access 0 index for information of amount and item name
	const temp = itemDetail.split(' at ')[0];
	// deconstruct syntax to split the string only on the first occurrence of ' '
	const [amount, ...rest] = temp.split(' ');

	if (rest.includes('imported') && rest[0] !== 'imported') {
		const fromIndex = rest.indexOf('imported');
		const toIndex = 0;
		const element = rest.splice(fromIndex, 1)[0];
		rest.splice(toIndex, 0, element);
		name = rest.join(' ');
	} else {
		name = rest.join(' ');
	}

	itemInfo['amount'] = Number(amount);
	itemInfo['name'] = name;
	itemInfo['price'] = Number(price);

	return itemInfo;
}

function calculatePriceAndTax(itemInfo, taxItems, basicTax, importTax) {
	// calculate price before tax by multiplying item price with the amount of item.
	let priceBeforeTax = itemInfo['amount'] * itemInfo['price'];

	// store import tax, basic tax etc.
	let taxes = 0;

	// store the price after adding taxes
	let priceAfterTax = 0;

	// store individual 
	let salesTax = 0;

	// add import tax if item is imported
	if (itemInfo['name'].includes('imported')) {
		taxes += importTax;
	}

	// add basic tax if item is in taxItems array
	for (let ele of taxItems) {
		if (itemInfo['name'].includes(ele)) {
			taxes += basicTax;
			break;
		}
	}

	// calculate sales tax if there are taxes
	if (taxes > 0) {
		// round to the nearest 0.05
		salesTax = Math.ceil((priceBeforeTax * taxes / 100) * 20) / 20;

		// toFixed() will turn it to string, so use Number again to turn it back to number
		priceAfterTax = Number((priceBeforeTax + salesTax).toFixed(2));
	} else {
		priceAfterTax = priceBeforeTax;
	}

  return [priceAfterTax, salesTax];
}

module.exports = { checkItemDetails, extractInformation, calculatePriceAndTax };
