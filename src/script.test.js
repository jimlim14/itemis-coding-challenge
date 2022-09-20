const receiptDetails = require('./script');
const { input1, input2, input3, invalidInput } = require('./mockData');

test('testing', () => {
	expect(receiptDetails(input1)).toBe(
		`1 book: 14.99\n1 music CD: 19.49\n1 chocolate bar: 1.05\nSales Taxes: 7.20\nTotal: 35.53`
	);
});
