//rango
const rango = function (inicio,fin){
    for (let i=0;i<fin;i++){
       console.log([i]);
       console.log(typeof ([i]));
    }
}

rango(1,11);

//suma entre arrays
let iterable = [10, 20, 30];

const suma = function (){
    
    for (let value of iterable) {
        value += value;
        console.log(value);
      }

}

suma ();


//rango 2

// Segunda version del rango (mejor estructurada)
// Usando el metodo filter

function rango2( arr, item ) {
    return arr.filter( function( e ) {
        return e !== item;
    } );
};

let inicio= [1,2,3,4,5];
let paso = rango2( inicio, 5 );
 
console.info( `array inicial:  [${inicio}]` );
// [1,2,3,4,5]
 
console.info(`array con paso: [${paso}]`);
// [1,2,3,4]