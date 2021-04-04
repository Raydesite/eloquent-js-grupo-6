/*
 * Una lista
 *
 * Los objetos, como conjuntos genéricos de valores, se pueden usar para
 * construir todo tipo de estructuras de datos. Una estructura de datos común
 * es la lista (no confundir con un array). Una lista es un conjunto anidado de
 * objetos, con el primer objeto conteniendo una referencia al segundo, el
 * segundo al tercero, y así sucesivamente.
 *
 * ```
 * let lista = {
 *  valor: 1,
 *  resto: {
 *    valor: 2,
 *    resto: {
 *      valor: 3,
 *      resto: null
 *    }
 *  }
 * };
 * ```
 *
 * Algo bueno de las listas es que pueden compartir partes de su estructura. Por
 * ejemplo, si creo dos nuevos valores {valor: 0, resto: lista} y {valor: -1,
 * resto: lista} (con lista refiriéndose a la vinculación definida anteriormente),
 * ambos son listas independientes, pero comparten la estructura que conforma
 * sus últimos tres elementos. La lista original también sigue siendo una lista
 * válida de tres elementos.
 *
 * Escribe una función arrayALista que construya una estructura de lista como
 * el que se muestra arriba cuando se le da [1, 2, 3] como argumento. También
 * escribe una función listaAArray que produzca un array de una lista. Luego
 * agrega una función de utilidad preceder, que tome un elemento y una lista y
 * creé una nueva lista que agrega el elemento al frente de la lista de entrada,
 * y posicion, que toma una lista y un número y retorne el elemento en la posición
 * dada en la lista (con cero refiriéndose al primer elemento) o undefined cuando
 * no exista tal elemento.
 *
 * Si aún no lo has hecho, también escribe una versión recursiva de posicion.
 */

class NodoLista {
  /**
   * @param {any} valor
   * @param {NodoLista} nodo
   */
  constructor (valor, nodo = null) {
    this.valor = valor
    this.nodo = nodo
  }
}

/**
 * Escribe una función arrayALista que construya una estructura de lista como
 * el que se muestra arriba cuando se le da [1, 2, 3] como argumento.
 * @param {Array<any>} elementos
 * @return NodoLista
 */
function arrayALista (elementos) {

  if (elementos.length === 0) {
    return new NodoLista(null)
  }
  const raiz = new NodoLista(elementos[0])
  let actual = raiz
  for (let i = 1; i < elementos.length; i++) {
    actual.nodo = new NodoLista(elementos[i])
    actual = actual.nodo
  }
  return raiz
}

console.info('== Fnc::arrayALista ====================')
const listaA = arrayALista([1, 2, 3])
console.debug('arrayALista(1..3)', listaA)
const listaB = arrayALista([10, 11, 12, 13, 14, 15])
console.debug('arrayALista(10..15)', listaB)

/**
 * También escribe una función listaAArray que produzca un array de una lista.
 * @param {NodoLista} lista
 */
function listaAArray (lista) {
  const arreglo = []
  let actual = lista
  do {
    arreglo.push(actual.valor)
    actual = actual.nodo
  } while (actual instanceof NodoLista)
  return arreglo
}

console.info('== Fnc::listaAArray ====================')
const arrA = listaAArray(listaA)
console.debug('arrayALista(1..3)', arrA)
const arrB = listaAArray(listaB)
console.debug('arrayALista(10..15)', arrB)

/**
 * Luego agrega una función de utilidad preceder, que tome un elemento y una
 * lista y creé una nueva lista que agrega el elemento al frente de la lista
 * de entrada.
 *
 * @param {any} elemento
 * @param {NodoLista} lista
 * @return {NodoLista}
 */
function preceder (elemento, lista) {
  if (!(elemento instanceof NodoLista)) {
    elemento = new NodoLista(elemento)
  }
  elemento.nodo = lista

  return elemento
}

console.info('== Fnc::preceder ====================')
listaX = preceder(22, listaA)
console.debug('preceder(22, listaA)', listaX)
listaY = preceder(50, listaB)
console.debug('preceder(50, listaB)', listaY)

/**
 * posicion, que toma una lista y un número y retorne el elemento en la posición
 * dada en la lista (con cero refiriéndose al primer elemento) o undefined cuando
 * no exista tal elemento.
 * @param {NodoLista} lista
 * @param {any} elemento
 * @return {number}
 */
function posicion (lista, elemento) {
  let deepValue = undefined
  let currentDeep = 0
  let actual = lista
  do {
    if (actual.valor === elemento) {
      deepValue = currentDeep
      break
    }

    actual = actual.nodo
    currentDeep++
  } while (actual instanceof NodoLista)

  return deepValue
}

console.info('== Fnc::posicion ====================')
console.debug('posicion(listaX, 2)', posicion(listaX,2))
console.debug('posicion(listaX, 5)', posicion(listaX, 3))
console.debug('posicion(listaY, 21)', posicion(listaX, 21))

debugger;
