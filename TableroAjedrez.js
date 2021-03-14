/*
Escribe un programa que cree un string que represente una cuadrícula de 8 ×
8, usando caracteres de nueva línea para separar las líneas. En cada posición
de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de
formar un tablero de ajedrez.

*/

for (let i=1; i<=8; i++){
    document.write("#" + "   " );
     
   for (let j=0; j<8; j++){
     document.write("#" + "  ");
     
     
   }
     document.write("<br/>");
 }