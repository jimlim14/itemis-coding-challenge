const receiptDetails = require('./script');
const {input1, input2, input3, invalidInput} = require('./mockData');

test('test if inputs are valid', () => {
	expect(receiptDetails(invalidInput)).toBe('invalid input');
});

