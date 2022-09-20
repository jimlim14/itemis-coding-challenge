const {
	checkItemDetails,
	extractInformation,
	calculatePriceAndTax,
} = require('./helper');
const {
	invalidInput1,
	invalidInput2,
	invalidInput3,
	input1,
	input2,
	input3,
} = require('./mockData');

// test individual invalid input, make it specific
describe('Testing invalid and valid inputs', () => {
	it('"at" is missing', () => {
		expect(checkItemDetails(invalidInput1)).toBe('missing awef');
	});
  it('amount is missing', () => {
		expect(checkItemDetails(invalidInput2)).toBe('missing amount');
	});
  it('price is missing', () => {
		expect(checkItemDetails(invalidInput3)).toBe('missing price');
	});
	it('should return true for valid input1', () => {
		expect(checkItemDetails(input1)).toBe(true);
	});
	it('should return true for valid input2', () => {
		expect(checkItemDetails(input2)).toBe(true);
	});
	it('should return true for valid input3', () => {
		expect(checkItemDetails(input3)).toBe(true);
	});
});

// test one word and two words enough
describe('Extract information from individual item detail from input1', () => {
	it('should return an object', () => {
		expect(extractInformation(input1[0])).toStrictEqual({
			name: 'book',
			amount: 1,
			price: 12.49,
		});
	});
	it('should return an object', () => {
		expect(extractInformation(input1[1])).toStrictEqual({
			name: 'music CD',
			amount: 1,
			price: 14.99,
		});
	});
	it('should return an object', () => {
		expect(extractInformation(input1[2])).toStrictEqual({
			name: 'chocolate bar',
			amount: 1,
			price: 0.85,
		});
	});
});

describe('Extract information from individual item detail from input2', () => {
	it('should return an object', () => {
		expect(extractInformation(input2[0])).toStrictEqual({
			name: 'imported box of chocolates',
			amount: 1,
			price: 10.0,
		});
	});
	it('should return an object', () => {
		expect(extractInformation(input2[1])).toStrictEqual({
			name: 'imported bottle of perfume',
			amount: 1,
			price: 47.5,
		});
	});
});

describe('Extract information from individual item detail from input3', () => {
	it('should return an object', () => {
		expect(extractInformation(input3[0])).toStrictEqual({
			name: 'imported bottle of perfume',
			amount: 1,
			price: 27.99,
		});
	});
	it('should return an object', () => {
		expect(extractInformation(input3[1])).toStrictEqual({
			name: 'bottle of perfume',
			amount: 1,
			price: 18.99,
		});
	});
	it('should return an object', () => {
		expect(extractInformation(input3[2])).toStrictEqual({
			name: 'packet of headache pills',
			amount: 1,
			price: 9.75,
		});
	});
	it('should return an object', () => {
		expect(extractInformation(input3[3])).toStrictEqual({
			name: 'imported box of chocolates',
			amount: 1,
			price: 11.25,
		});
	});
});

describe('Calculate price after tax and sales tax for individual item', () => {
	const basicTax = 10;
	const importTax = 5;
	const taxItems = ['music CD', 'perfume'];
	const itemInfo1 = {
		name: 'imported bottle of perfume',
		amount: 1,
		price: 27.99,
	};
	const itemInfo2 = {
		name: 'book',
		amount: 1,
		price: 12.49,
	};
	it('should return price after tax and sales tax in an array', () => {
		expect(
			calculatePriceAndTax(itemInfo1, taxItems, basicTax, importTax)
		).toStrictEqual([32.19, 4.2]);
		expect(
			calculatePriceAndTax(itemInfo2, taxItems, basicTax, importTax)
		).toStrictEqual([12.49, 0]);
	});
});
