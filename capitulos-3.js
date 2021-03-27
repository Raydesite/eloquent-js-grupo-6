// Mínimo

const minimo = (a,b) => a < b ? a : b ;

//  Numero par

const esPar = (numero) => {
  let residuo = Math.abs(numero)%2;  // Utilicé Math.abs para que tome el valor absoluto e ignore el signo del numero
  switch (residuo){
      case 0: return true;
          break;
      case 1: return false;
          break;
      default:
          return esPar(numero -2)
  }
}

// Contar F
const contarFs = (cadena) => {
  let fs = 0
  for(let i = 0; i < cadena.length; i++) {
    if(cadena[i] == "F"){
      fs ++
    }
  }
  return fs;
}

console.log(contarFs("DFGHJKrtyuiFFFfghjfDE"))
//4


// Contar caracteres
const contarCaracter = (caracter) => {
  let fs = 0
  return (cadena) => {
    for(let i = 0; i < cadena.length; i++) {
      if(cadena[i] == caracter){
        fs ++
      }
    }
    return fs;
  }
}

// Nuevo contar F
const contarFs2 = contarCaracter("F")
console.log(contarFs2("DFGHJKrtyuiFFFFfghjfDE"))
