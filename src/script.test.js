const receiptDetails = require('./script');
const { input1, input2, input3, invalidInput } = require('./mockData');

test('testing', () => {
	expect(receiptDetails(input1)).toBe(undefined);
});
