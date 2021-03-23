/* Conteo de frijoles
Puedes obtener el N-ésimo carácter, o letra, de un string escribiendo "string"[
N]. El valor devuelto será un string que contiene solo un carácter (por ejemplo,
"f"). 
El primer carácter tiene posición cero, lo que hace que el último se
encuentre en la posición string.length - 1. En otras palabras, un string de
dos caracteres tiene una longitud de 2, y sus carácteres tendrán las posiciones
0 y 1.
Escribe una función contarFs que tome un string como su único argumento
y devuelva un número que indica cuántos caracteres “F” en mayúsculas haya
en el string.
Despues, escribe una función llamada contarCaracteres que se comporte
como contarFs, excepto que toma un segundo argumento que indica el carácter
que debe ser contado (en lugar de contar solo caracteres “F” en mayúscula).
Reescribe contarFs para que haga uso de esta nueva función.*/


/* let Primerf= cadena[0];
    console.log(Primerf);
  if (Primerf=='F'){
    console.log(Primerf.length);
  }else{
    console.log('no es f')
  }*/
  let cadena ='FFELIZF';

  function contarFs(cadena)
 {
  let conteo=0;
   for (i=0;i<cadena.length;i++){
     
     console.log(i); 
     let cadenaF= cadena[i];
     if (cadenaF=='F' ){
       conteo++;
       console.log(` F en la posicion: ${conteo}`);    
  
     }  
     
   }
   console.log(`Hay ${conteo}  Fs en la cadena`);
   
    
 }
 
 //contarFs(cadena);
 
  function contarCaracter(cadena,caracter)
 {
  let conteo=0;
   for (i=0;i<cadena.length;i++){
     console.log(i); 
     
     if (cadena[i]=== caracter ){
       conteo++;
       console.log(` F en la posicion: ${conteo}`);    
  
     }  
     
   }
   console.log(`Hay ${conteo}  caracter en la cadena`);
   
    
 }
 contarCaracter('FelizF', "e");