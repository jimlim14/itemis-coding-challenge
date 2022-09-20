const { checkItemDetails } = require('./helper');
const { invalidInput, input1, input2, input3 } = require('./mockData');

test('invalid input should return false', () => {
	expect(checkItemDetails(invalidInput)).toBe(false);
});

test('input1 should return true', () => {
	expect(checkItemDetails(input1)).toBe(true);
});

test('input2 should return true', () => {
	expect(checkItemDetails(input2)).toBe(true);
});

test('input3 should return true', () => {
	expect(checkItemDetails(input3)).toBe(true);
});