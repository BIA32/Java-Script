function minMax(arr) {
	return [Math.min(...arr), Math.max(...arr)];
}

function addition(num) {
	return ++num;
}

function getFirstValue(arr) {
	const firstValue = arr.shift();
	return firstValue;
}