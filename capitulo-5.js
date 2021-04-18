/* Aplanamiento
Use el método reduce en combinación con el método concat para “aplanar” un
array de arrays en un único array que tenga todos los elementos de los arrays
originales. */

const flat = (arrInArray) => arrInArray.reduce((a,b) => a.concat(b))

console.log(flat([[1,2],[3,4],[5,6]]))


/* Tu propio ciclo
Escriba una función de orden superior llamada ciclo que proporcione algo así
como una declaración de ciclo for. Esta toma un valor, una función de prueba,
una función de actualización y un cuerpo de función. 
En cada iteración, 
primero ejecuta la función de prueba en el valor actual del ciclo y se detiene si esta
retorna falso. 
Luego llama al cuerpo de función, dándole el valor actual. 
Y finalmente, llama a la función de actualización para crear un nuevo valor y
comienza desde el principio.
Cuando definas la función, puedes usar un ciclo regular para hacer los ciclos
reales. */

const loop = (element, testFunction, updateFunction, bodyFunction) => {
  while(testFunction(element)){
    bodyFunction(element);
    element = updateFunction(element)
  }
}

// Your code here.

loop(3, (n) => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1


/* Cada
De forma análoga al método some, los arrays también tienen un método every
(“cada”). Este retorna true cuando la función dada devuelve verdadero para
cada elemento en el array. En cierto modo, some es una versión del operador
|| que actúa en arrays, y every es como el operador &&.
Implementa every como una función que tome un array y una función predicado como parámetros. Escribe dos versiones, una usando un ciclo y una
usando el método some */

const every = (array, test) => {
  for(el of array){
    if(!test(el)) return false;
  }
  return true;
}
const every = (array, test) => ! array.some(el => !test(el))



console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true





/*
Dirección de Escritura Dominante
Escriba una función que calcule la dirección de escritura dominante en un string
de texto. Recuerde que cada objeto de codigo tiene una propiedad direction
que puede ser "ltr" (de izquierda a derecha), "rtl" (de derecha a izquierda),
o "ttb" (arriba a abajo).
La dirección dominante es la dirección de la mayoría de los caracteres que
tienen un código asociado a ellos. Las funciones codigoCaracter y contarPor
definidas anteriormente en el capítulo probablemente seran útiles aquí. */

const dominantDirection = (text) => {
  let idioms = {}
  for(let i = 0; i < text.length; i++){
    let code = text.charCodeAt(i);
    let idiom = SCRIPTS.find(el => el.ranges.some(([start, end]) => code >= start && code <= end))
    if(idiom){
      idioms[idiom.direction] =  idioms[idiom.direction] + 1 || 1
    }
  }
  let maxCant = Math.max(...Object.values(idioms))
  let maxKey = Object.entries(idioms).find(el => el[1] == maxCant)[0]
  return maxKey
}

console.log(dominantDirection("Hello!")) // → ltr
console.log(dominantDirection("Hey, مساء الخير")) // → rtl

