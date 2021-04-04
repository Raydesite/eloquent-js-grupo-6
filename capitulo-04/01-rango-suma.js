/*
 * La suma de un rango
 * La introducción de este libro aludía a lo siguiente como una buena forma de
 * calcular la suma de un rango de números:
 * ```console.log(suma(rango(1, 10)));```
 *
 * Escribe una función rango que tome dos argumentos, inicio y final, y
 * retorne un array que contenga todos los números desde inicio hasta (e incluyendo) final.
 * Luego, escribe una función suma que tome un array de números y retorne
 * la suma de estos números.
 * Ejecuta el programa de ejemplo y ve si realmente retorna 55.
 *
 * Como una misión extra, modifica tu función rango para tomar un tercer
 * argumento opcional que indique el valor de “paso” utilizado para cuando construyas el array. Si no se da ningún paso, los elementos suben en incrementos
 * de uno, correspondiedo al comportamiento anterior. La llamada a la función
 * rango(1, 10, 2) deberia retornar [1, 3, 5, 7, 9]. Asegúrate de que también
 * funcione con valores de pasos negativos para que rango(5, 2, -1) produzca
 * [5, 4, 3, 2]
 *
 */

/**
 * Funcion para generar un arreglo de n numeros desde el inicial el final (inclusivo)
 * @param {number} inicial
 * @param {number} final
 */
function rango (inicial, final) {
  return Array.from({ length: 1 + final - inicial },
    (_, i) => i + inicial)
}

console.info('== Fnc::rango ====================')
console.debug('rango(1, 10): ', rango(1, 10))
console.debug('rango(5, 10): ', rango(5, 10))
console.debug('rang(10, 30): ', rango(10, 30))

/**
 *
 * @param {Array<number>} numeros
 * @return {number}
 */
function suma (numeros) {
  return numeros.reduce((acc, n) => acc + n)
}

console.info('== Fnc::suma ====================')
console.debug('suma(rango(1, 10)):  ', suma(rango(1, 10)))
console.debug('suma(rango(5, 10)):  ', suma(rango(5, 10)))
console.debug('suma(rango(10, 30)): ', suma(rango(10, 30)))


