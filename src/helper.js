function checkItemDetails (itemDetails) {
  for (let itemDetail of itemDetails) {
    // split individual item detail by space.
    const splitItemDetail = itemDetail.split(' ');

    // extract the very first element from splitItemDetail which is the amount of the item
    const amount = Number(splitItemDetail[0]);

    // extract the last element from splitItemDetail which is the price of the item
    const price = Number(splitItemDetail[splitItemDetail.length - 1]);

    // check whether each individual item detail is valid 
    // 1) whether it contains 'at'
    // 2) whether the amount is there or not
    // 3) whether the price is there or not
		if (!itemDetail.includes(' at ') || amount === NaN || price === NaN) {
			return false;
    }
    return true;
	}
}

module.exports = checkItemDetails;