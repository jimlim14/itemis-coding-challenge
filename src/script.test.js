const receiptDetails = require('./script');
const { input1, input2, input3, invalidInput } = require('./mockData');

test('test input1', () => {
	expect(receiptDetails(input2)).toBe(undefined);
});