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
	const itemInfo = {};
	let name = '';

	const price = itemDetail.split(' at ')[1];
	const temp = itemDetail.split(' at ')[0];
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
	let priceBeforeTax = itemInfo['amount'] * itemInfo['price'];
	let taxes = 0;
	let priceAfterTax = 0;
	let salesTax = 0;

	if (itemInfo['name'].includes('imported')) {
		taxes += importTax;
	}

	for (let ele of taxItems) {
		if (itemInfo['name'].includes(ele)) {
			taxes += basicTax;
			break;
		}
	}

	if (taxes > 0) {
		// round to the nearest 0.05
		salesTax = Math.ceil((priceBeforeTax * taxes / 100) * 20) / 20;
		priceAfterTax = Number((priceBeforeTax + salesTax).toFixed(2));
	} else {
		priceAfterTax = priceBeforeTax;
	}

  return [priceAfterTax, salesTax];
}

module.exports = { checkItemDetails, extractInformation, calculatePriceAndTax };
