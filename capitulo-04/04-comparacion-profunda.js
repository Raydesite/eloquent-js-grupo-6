/*
 * Comparación profunda
 *
 * El operador == compara objetos por identidad.
 * Pero a veces preferirias comparar los valores de sus propiedades reales.
 * Escribe una función igualdadProfunda que toma dos valores y retorne true
 * solo si tienen el mismo valor o son objetos con las mismas propiedades, donde
 * los valores de las propiedades sean iguales cuando comparadas con una llamada
 * recursiva a igualdadProfunda.
 * Para saber si los valores deben ser comparados directamente
 * (usa el operador== para eso) o si deben tener sus propiedades comparadas,
 * puedes usar el operador typeof. Si produce "object" para ambos valores,
 * deberías hacer una comparación profunda. Pero tienes que tomar una excepción
 * tonta en cuenta: debido a un accidente histórico, typeof null también
 * produce "object".
 *
 * La función Object.keys será útil para cuando necesites revisar las
 * propiedades de los objetos para compararlos.
 */

function igualdadProfunda (source, other) {
  if (source === other) {
    return true
  }

  /// Son arreglos?
  if (Array.isArray(source) && Array.isArray(other)) {

    return (source.length === other.length) &&
      source.every((item, key) => other.includes(item))

  }

  if (
    (source !== null && other !== null) &&
    (typeof source === 'object' && typeof other === 'object')
  ) {

    const sourceKeys = Object.keys(source).sort()
    const otherKeys = Object.keys(other).sort()
    const hasSameKeys = (sourceKeys.length === otherKeys.length)
      && sourceKeys.every(item => {
        return otherKeys.includes(item)
      })

    if (!hasSameKeys) {
      return false
    }

    let hasSameValues = true
    for (const key in source) {
      if (!igualdadProfunda(source[key], other[key])) {
        hasSameValues = false
        break;
      }
    }
    return hasSameValues
  }

  return false
}

console.info('== Fnc::igualdadProfunda ====================')
let isSameA = igualdadProfunda(22, 22)
console.debug('igualdadProfunda(...)', isSameA)
isSameA = igualdadProfunda('50', '50')
console.debug('igualdadProfunda(...)', isSameA)
isSameA = igualdadProfunda(['Hola', 'mundo', 55], ['Hola', 55, 'mundo'])
console.debug('igualdadProfunda(...)', isSameA)
isSameA = igualdadProfunda(
  {
  'hola': 'mundo',
  'subelemento': {
    'casa': 254,
    'calle': 'San Miguel',
    'telefonos': [5487524989, 8974523565],
  },
},
  /**/{
  'hola': 'mundo',
  'subelemento': {
    'casa': 254,
    'calle': 'San Miguel',
    'telefonos': [5487524989, 8974523565],
  },
})
console.debug('complejo(...)', isSameA)
