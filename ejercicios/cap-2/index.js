/*
 * Ejercicio 1
 * Escribe una función min que tome dos argumentos y retorne su mínimo.
 */
// const min = (n1, n2)=> n1 > n2 ? n1 : n2

/*
 * Ejercicio 2
 * Define una función recursiva esPar que corresponda a esta descripción. La
 * función debe aceptar un solo parámetro (un número entero, positivo) y devolver
 *  un Booleano.
 */

// const esPar = function(n) {
//   if(n === 0) return true;
//   else if( n == 1) return false;
//   else return esPar(n -2)
// }

/*
 * Ejercicio 2
 * Escribe una función contarFs que tome un string como su único argumento
 * y devuelva un número que indica cuántos caracteres “F” en mayúsculas haya
 * en el string.
 * Despues, escribe una función llamada contarCaracteres que se comporte
 * como contarFs, excepto que toma un segundo argumento que indica el carácter
 * que debe ser contado (en lugar de contar solo caracteres “F” en mayúscula).
 * Reescribe contarFs para que haga uso de esta nueva función.
 */

const contarFs = (string, character)=>{
  let cantidadF= 0
  for (let char = 0; char < string.length; char++) {
    if(string[char] === character) cantidadF++
  }
  return `La cantidad de ${character} es ${cantidadF}`;
}
console.log(contarFs("Felicidad", "e"))


