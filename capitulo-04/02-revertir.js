/*
 * Revirtiendo un array
 * Los arrays tienen un método reverse que cambia al array invirtiendo el orden
 * en que aparecen sus elementos. Para este ejercicio, escribe dos funciones,
 * revertirArray y revertirArrayEnSuLugar. El primero, revertirArray, toma
 * un array como argumento y produce un nuevo array que tiene los mismos
 * elementos pero en el orden inverso. El segundo, revertirArrayEnSuLugar, hace
 * lo que hace el métodoreverse: modifica el array dado como argumento
 * invirtiendo sus elementos.
 *
 * Ninguno de los dos puede usar el método reverse estándar.
 * Pensando en las notas acerca de los efectos secundarios y las funciones puras
 * en el capítulo anterior, qué variante esperas que sea útil en más situaciones?
 * Cuál corre más rápido?
 */

/**
 *
 * @param {Array<any>} input
 * @return {Array<any>}
 */
function revetirArray (input) {
  const output = []
  for (let i = input.length - 1; i >= 0; i--) {
    output.push(input[i])
  }
  return output
}

console.info('== Fnc::revetirArray ====================')
console.debug('revetirArray([1, 2, 3, 4, 5])', revetirArray([1, 2, 3, 4, 5]))
console.debug('revetirArray([50, 40, 30, 20, 10])',
  revetirArray([50, 40, 30, 20, 10]))

/**
 *
 * @param {Array<any>} input
 */
function revertirArrayEnSuLugar (input) {

  let idx = Math.floor(input.length / 2)
  let lsIndex = 0
  let msIndex = input.length - 1
  for (; idx > 0; idx--, lsIndex++, msIndex--) {
    let msAux = input[msIndex]
    input[msIndex] = input[lsIndex]
    input[lsIndex] = msAux
  }

}

console.info('== Fnc::revertirArrayEnSuLugar ====================')
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
revertirArrayEnSuLugar(arr)
console.debug('revertirArrayEnSuLugar([1...9])', arr)

arr = [99, 98, 97, 96, 95, 94, 93, 92, 91, 90];
revertirArrayEnSuLugar(arr)
console.debug('revertirArrayEnSuLugar([99..90])', arr)
