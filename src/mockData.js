const input1 = [
	'1 book at 12.49',
	'1 music CD at 14.99',
	'1 chocolate bar at 0.85',
];



const input2 = [
	'1 imported box of chocolates at 10.00',
	'1 imported bottle of perfume at 47.50',
];



const input3 = [
	'1 imported bottle of perfume at 27.99',
	'1 bottle of perfume at 18.99',
	'1 packet of headache pills at 9.75',
	'1 box of imported chocolates at 11.25',
];

const output1 =
	'1 book: 12.49\n1 music CD: 16.49\n1 chocolate bar: 0.85\nSales Taxes: 1.50\nTotal: 29.83';

const output2 =
	'1 imported box of chocolates: 10.50\n1 imported bottle of perfume: 54.65\nSales Taxes: 7.65\nTotal: 65.15';

const output3 =
	'1 imported bottle of perfume: 32.19\n1 bottle of perfume: 20.89\n1 packet of headache pills: 9.75\n1 imported box of chocolates: 11.85\nSales Taxes: 6.70\nTotal: 74.68';

const invalidInput = [
	'1 book 12.49',
	'chocolate bar at 0.85',
	'1 imported chocolate bar at',
];

module.exports = { input1, input2, input3, invalidInput, output1, output2, output3 };
