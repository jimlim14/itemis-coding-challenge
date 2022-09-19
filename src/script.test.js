const receiptDetails = require('./script');
const { input1, input2, input3, invalidInput } = require('./mockData');

test('return invalid input if input is invalid', () => {
	expect(receiptDetails(invalidInput)).toBe('invalid input');
});