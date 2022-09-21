# itemis-coding-challenge

This is a Itemis Coding Challenge built with [Node.Js](https://nodejs.org/en/)

## Problem 1: SALES TAXES

Basic sales tax is applicable at a rate of 10% on all goods, except books, food, and medical products that are exempt. Import duty is an additional sales tax applicable on all imported goods at a rate of 5%, with no exemptions. When I purchase items I receive a receipt which lists the name of all the items and their price (including tax), finishing with the total cost of the items, and the total amounts of sales taxes paid. The rounding rules for sales tax are that for a tax rate of n%, a shelf price of p contains (np/100 rounded up to the nearest 0.05) amount of sales tax.

### INPUT:

Input1:<br>
1 book at 12.49<br>
1 music CD at 14.99<br>
1 chocolate bar at 0.85<br>

Input 2:<br>
1 imported box of chocolates at 10.00<br>
1 imported bottle of perfume at 47.50<br>

Input 3:<br>
1 imported bottle of perfume at 27.99<br>
1 bottle of perfume at 18.99<br>
1 packet of headache pills at 9.75<br>
1 box of imported chocolates at 11.25<br>

### OUTPUT:
Output1:<br>
1 book: 12.49<br>
1 music CD: 16.49<br>
1 chocolate bar: 0.85<br>
Sales Taxes: 1.50<br>
Total: 29.83<br>

Output 2:<br>
1 imported box of chocolates: 10.50<br>
1 imported bottle of perfume: 54.65<br>
Sales Taxes: 7.65<br>
Total: 65.15<br>

Output 3:<br>
1 imported bottle of perfume: 32.19<br>
1 bottle of perfume: 20.89<br>
1 packet of headache pills: 9.75<br>
1 imported box of chocolates: 11.85<br>
Sales Taxes: 6.70<br>
Total: 74.68<br>

### GETTING STARTED

First, clone this repository, cd to project's directory and install the dependencies either by npm or yarn:

```bash
git clone https://github.com/jimlim14/itemis-coding-challenge.git
cd itemis-coding-challenge
npm install
or
yarn install
```

I am using [JEST](https://jestjs.io/) library for unit testing, simply run following code to run test suites:

```bash
npm test
```

To show the outputs on node, simply run the code below:

```bash
cd src
node script.js
```

## ASSUMPTION

Below are the assumptions that I made based on the information, inputs, and outputs given above.

1) Every input should have 4 main parts, each comes after one another.<br><br>
The ***amount*** of the item, the ***name*** of the item, the word ***'at'***, and the ***price*** of the item.<br><br>
Ex. 1 imported box of chocolate at 10.00.<br>
* amount of the item: 1
* the name of the item: imported box of chocolate
* the word 'at'
* the price of the item: 10

2) Any input that does not fulfill the above example is considered as an invalid input which cannot be processed.

3) The item will have import tax of 5% if there is the word ***imported*** in the name of the item no matter the position.

4) Based on the inputs, I assumed only the ***music CD*** and ***perfume*** that is out of the non-tax categories which would have basic tax of 10%.

5) Anything that does not fall under the tax category will not have 10% basic tax.

6) Based on the inputs, no matter where the position of the word ***imported*** is, it should be moved to the beginning of the item name when it comes to output. And the word ***at*** should be replaced by colon<br><br>
Ex. 1 box of imported chocolate at 11.25<br><br>
it should result to an output of '1 imported box of chocolate: 11.50'.


