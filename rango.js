// La suma de un rango


function rango(a, b, p=1) {
    let c = []
       for (a; (b-a)*p >= 0; a+=p) {
       c.push(a);
    }
    return c;
}

function suma(a) {
    let c =0;
    for (let x of a) {
      c+=x;
    }
    return c;
   
}
console.log(suma(rango(1,10)));
console.log(rango(1,10,2));
console.log(rango(5,2,-1));

console.log(suma(rango(5,2,-1)));