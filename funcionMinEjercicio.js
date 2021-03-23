/* Capitulo 3
Mínimo
El capítulo anterior introdujo la función estándar Math.min que devuelve su
argumento más pequeño. Nosotros podemos construir algo como eso ahora.
Escribe una función min que tome dos argumentos y retorne su mínimo.
*/

const menor = function(num1,num2) {
    if (num1 < num2 ){
      return num1 ;
    } else if( num2 < num1){
      return num2;
    } else {
      console.log(' no hay num menor')
    }
    
  };
  console.log(menor(7,8));