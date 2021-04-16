let arrays = [[1, 2, 3], [4, 5, 7, 8], [6]];

function flat (array) {
	return array.reduce((acc, current) => acc.concat(current))
}

console.log(flat(arrays))