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
const { BASIC_TAX, IMPORT_TAX, TAX_ITEMS } = require('./constant');

describe('Testing invalid and valid inputs', () => {
	it('"at" is missing', () => {
		expect(checkItemDetails(invalidInput1)).toBe('missing "at"');
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

describe('Extract information from individual item detail', () => {
	it('should extract name with 1 word', () => {
		expect(extractInformation(input1[0])).toStrictEqual({
			name: 'book',
			amount: 1,
			price: 12.49,
		});
	});
	it('should extract name with 2 word', () => {
		expect(extractInformation(input1[1])).toStrictEqual({
			name: 'music CD',
			amount: 1,
			price: 14.99,
		});
	});
  it('should extract name with 4 word', () => {
		expect(extractInformation(input2[0])).toStrictEqual({
			name: 'imported box of chocolates',
			amount: 1,
			price: 10.0,
		});
	});
  it('should extract name with 4 word', () => {
		expect(extractInformation(input3[3])).toStrictEqual({
			name: 'imported box of chocolates',
			amount: 1,
			price: 11.25,
		});
	});
});

describe('Calculate price after tax and sales tax for individual item', () => {
  // tax = 10 + 5
	const itemInfo1 = {
		name: 'imported bottle of perfume',
		amount: 1,
		price: 27.99,
	};
  // tax = 0
	const itemInfo2 = {
		name: 'book',
		amount: 1,
		price: 12.49,
	};
  // tax = 10
  const itemInfo3 = {
		name: 'music CD',
		amount: 1,
		price: 14.99,
	};
  // tax = 5
  const itemInfo4 = {
    name: 'imported box of chocolate',
    amount: 1,
    price: 10
  }

	it('should calculate both basic and import tax', () => {
		expect(
			calculatePriceAndTax(itemInfo1, TAX_ITEMS, BASIC_TAX, IMPORT_TAX)
		).toStrictEqual([32.19, 4.2]);
	});
  it('should calculate without tax', () => {
    expect(
      calculatePriceAndTax(itemInfo2, TAX_ITEMS, BASIC_TAX, IMPORT_TAX)
    ).toStrictEqual([12.49, 0]);
  })
  it('should calculate with basic tax only', () => {
    expect(
      calculatePriceAndTax(itemInfo3, TAX_ITEMS, BASIC_TAX, IMPORT_TAX)
    ).toStrictEqual([16.49, 1.5]);
  })
  it('should calculate with import tax only', () => {
    expect(
      calculatePriceAndTax(itemInfo4, TAX_ITEMS, BASIC_TAX, IMPORT_TAX)
    ).toStrictEqual([10.5, 0.5]);
  })
});
