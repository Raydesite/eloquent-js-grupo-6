/**
 *
Escribe una función arrayALista que construya una estructura de lista como
el que se muestra arriba cuando se le da [1, 2, 3] como argumento. 

También
escribe una función listaAArray que produzca un array de una lista. 

Luego
agrega una función de utilidad preceder, que tome un elemento y una lista y
creé una nueva lista que agrega el elemento al frente de la lista de entrada, y
posicion, que toma una lista y un número y retorne el elemento en la posición
dada en la lista (con cero refiriéndose al primer elemento) o undefined cuando
no exista tal elemento.
Si aún no lo has hecho,
 */

function arrayALista(array) { 
    let list = null; 
    for (let i = array.length; i >= 0; i--) 
      //decremento 3.2.1
      list = 
        { 
        value: array[i],
        rest: list 
         }; 
    return list; } 
  
  console.log(arrayALista([1, 2, 3]));


const listaArray = () => {
let lista = {
    valor: 1,
    resto: {
    valor: 2,
    resto: {
    valor: 3,
  resto: null
          }
    }
    
};

// Object.entries convierte tanto clave y valor. Cada
// par es convertido a un arreglo. Al final tenemos un array de arrays
let arregloDeClavesYValores = 
Object.entries(lista);
console.log("Claves y valores: ", arregloDeClavesYValores);

let arr2 = ['hola', 'jeje'];
let arr3 = arr2.concat(arregloDeClavesYValores);

console.log('----array nuevo---->')
console.log(arr3);
}
listaArray();