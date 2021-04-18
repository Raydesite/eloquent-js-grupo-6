/* Escribe una función rango que tome dos argumentos, inicio y final, y
retorne un array que contenga todos los números desde inicio hasta (e incluyendo) final. */

const rango = (inicio, final) => {
  let rango = [];
  for (inicio; inicio <= final; inicio++)
      rango.push(i);
  return rango;
}


/* Luego, escribe una función suma que tome un array de números y retorne
la suma de estos números. Ejecuta el programa de ejemplo y ve si realmente
retorna 55 */

function suma(numeros) {
  return numeros.reduce((a,b) => a+b)
}


/* Como una misión extra, modifica tu función rango para tomar un tercer
argumento opcional que indique el valor de “paso” utilizado para cuando construyas el array. Si no se da ningún paso, los elementos suben en incrementos
de uno, correspondiedo al comportamiento anterior. La llamada a la función
rango(1, 10, 2) deberia retornar [1, 3, 5, 7, 9]. Asegúrate de que también
funcione con valores de pasos negativos para que rango(5, 2, -1) produzca
[5, 4, 3, 2]. */

const range2 = (inicio, final, paso = 1) => {
  let rango = [];
  if(inicio < final && paso > 0){
    for (inicio; inicio <= final; inicio+=paso)
      rango.push(inicio);
  } else if(inicio > final && paso < 0) {
    for (inicio; inicio >= final; inicio+=paso)
      rango.push(inicio);
  }
  return rango;
}
console.log(range2(15,2,-3))
console.log(range2(1,10,2))

/* Revirtiendo un array
Los arrays tienen un método reverse que cambia al array invirtiendo el orden en que aparecen sus elementos. Para este ejercicio, escribe dos funciones,
revertirArray y revertirArrayEnSuLugar. El primero, revertirArray, toma
un array como argumento y produce un nuevo array que tiene los mismos elementos pero en el orden inverso. El segundo, revertirArrayEnSuLugar, hace lo
que hace el métodoreverse: modifica el array dado como argumento invirtiendo
sus elementos. Ninguno de los dos puede usar el método reverse estándar */

const revertirArray = (arr) => {
  let arrReverse = []
  for(let i = arr.length - 1; i >=0; i --){
      arrReverse.push(arr[i])
  }
  return arrReverse;
}

console.log(revertirArray([9,3,4,2,1]))

const revertirArrayEnSuLugar = (arr) => {
  let spaces = arr.length
  for(let i = spaces - 2; i >= 0 ; i--){
      let element = arr.splice(i,1)[0]
      arr.push(element)
  }
}

/*
Escribe una función arrayALista que construya una estructura de lista como
el que se muestra arriba cuando se le da [1, 2, 3] como argumento. */

const arrayALista = (arr) => {
  return {
    valor: arr.shift(),
    resto: arr.length ? arrayALista(arr) : null
  }
}

console.log(arrayALista([1,2,3]))

/* También
escribe una función listaAArray que produzca un array de una lista.  */

const listaAArray = (lista) => {
  return  lista.resto ? [lista.valor, ...listaAArray(lista.resto)] : [lista.valor]
}
console.log(listaAArray(arrayALista([1,2,3])))


/* Luego
agrega una función de utilidad preceder, que tome un elemento y una lista y
creé una nueva lista que agrega el elemento al frente de la lista de entrada,  */

const preceder = (valor, resto) => ({ valor, resto })

let lista = { valor: 1, resto: { valor: 2, resto: { valor: 3, resto: null } } }
console.log(preceder(5, lista))

/* y
posicion, que toma una lista y un número y retorne el elemento en la posición
dada en la lista (con cero refiriéndose al primer elemento) o undefined cuando
no exista tal elemento. */

const posicion = (lista, numero) => {

}

/* 
El operador == compara objetos por identidad. Pero a veces preferirias comparar los valores de sus propiedades reales.
Escribe una función igualdadProfunda que toma dos valores y retorne true
solo si tienen el mismo valor o son objetos con las mismas propiedades, donde
los valores de las propiedades sean iguales cuando comparadas con una llamada
recursiva a igualdadProfunda.
Para saber si los valores deben ser comparados directamente (usa el operador
== para eso) o si deben tener sus propiedades comparadas, puedes usar el
operador typeof. Si produce "object" para ambos valores, deberías hacer una
comparación profunda. Pero tienes que tomar una excepción tonta en cuenta:
debido a un accidente histórico, typeof null también produce "object".
La función Object.keys será útil para cuando necesites revisar las propiedades
de los objetos para compararlos.
 */

const igualdadProfunda = (elemento1, elemento2) => {
  if(elemento1 != null && elemento2 != null && typeof elemento1 == "object" && typeof elemento2 == "object"){
    let keys1 = Object.keys(elemento1).sort()
    let keys2 = Object.keys(elemento2).sort()
    if(keys1.join() != keys2.join()){
      return false;
    }
    for(let key of keys1){
      let el1 = elemento1[key];
      let el2 = elemento2[key];
      if(Array.isArray(elemento1[key])){
        el1 = elemento1[key].sort()
        el2 = elemento2[key].sort()
      }
      if(!igualdadProfunda(el1, el2)){
        return false;
      }
    }
    return true;
  } else {
    return elemento1 === elemento2;
  }
}
obj1 = {
  nombre: "Ana",
  edad: 25,
  amigos: ["a","b","c"]
}

obj2 = {
  nombre: "Ana",
  edad: 25,
  amigos: ["b","c","a"]
}

console.log(igualdadProfunda(obj1,obj2))

personas = [
  {
    nombre: "Maria",
    fechaNac: "19/09/1994"
  },
  {
    nombre: "Jose",
    fechaNac: "04/02/1997"
  },
  {
    nombre: "Julio",
    fechaNac: "20/03/1996"
  },
]


let source = ["a","b","c"]
let other = ["b", "a", "a"]

console.log(source.every((item, key) => other.includes(item)))








