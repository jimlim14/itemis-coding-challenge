const receiptDetails = require('./script');
const {
	input1,
	input2,
	input3,
	invalidInput1,
	output1,
	output2,
	output3,
} = require('./mockData');

describe('Check if receipt details are correct', () => {
	it('exit function if invalid input', () => {
		expect(receiptDetails(invalidInput1)).toBe(0);
	});
	it('should return correct receipt details', () => {
		expect(receiptDetails(input1)).toBe(output1);
		expect(receiptDetails(input2)).toBe(output2);
		expect(receiptDetails(input3)).toBe(output3);
	});
});
