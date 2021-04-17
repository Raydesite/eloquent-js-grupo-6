//Aplanamiento

function plana(ar) {
    return ar.reduce((a, b) => a.concat(b));
}

let arrays = [[1, 2, 3], [4, 5], [6]];
// Tu código aquí.
// → [1, 2, 3, 4, 5, 6]

console.log(plana(arrays));
