const { checkItemDetails, extractInformation } = require('./helper');
const { invalidInput, input1, input2, input3 } = require('./mockData');

describe('Testing invalid and valid inputs', () => {
	it('should return false for invalid input', () => {
		expect(checkItemDetails(invalidInput)).toBe(false);
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
			price: 10.00,
		});
	});
	it('should return an object', () => {
		expect(extractInformation(input2[1])).toStrictEqual({
			name: 'imported bottle of perfume',
			amount: 1,
			price: 47.50,
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
			name: 'box of imported chocolates',
			amount: 1,
			price: 11.25,
		});
	});
});