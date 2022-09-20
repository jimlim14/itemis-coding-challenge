const receiptDetails = require('./script');
const {
	input1,
	input2,
	input3,
	invalidInput,
	output1,
	output2,
	output3,
} = require('./mockData');

describe('Check if receipt details are correct', () => {
	it('should return invalid input', () => {
		expect(receiptDetails(invalidInput)).toBe('invalid input');
	});
	it('should return correct receipt details', () => {
		expect(receiptDetails(input1)).toBe(output1);
		expect(receiptDetails(input2)).toBe(output2);
		expect(receiptDetails(input3)).toBe(output3);
	});
});
