/*
  Ejercicio 1
    Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo
*/
let string = '#';
for(let i = 0; i < 7; i++){
  console.log(string);
  string += "#";
}

/*
  Ejercicio 2
    Escribe un programa que use console.log para imprimir todos los números de
  1 a 100, con dos excepciones. Para números divisibles por 3, imprime "Fizz"
  en lugar del número, y para los números divisibles por 5 (y no 3), imprime
  "Buzz" en su lugar.
  Cuando tengas eso funcionando, modifica tu programa para imprimir "
  FizzBuzz", para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz"
  o "Buzz" para números divisibles por solo uno de ellos).
  (Esta es en realidad una pregunta de entrevista que se ha dicho elimina un
  porcentaje significativo de candidatos a programadores. Así que si la puedes
  resolver, tu valor en el mercado laboral acaba de subir).
*/

let numero = 1
while( numero <=100){
  if(numero %3 == 0 && numero %5 == 0) console.log("FizzBuzz");
  else if(numero %3 ==0) console.log('Fizz')
  else if(numero %5 ==0) console.log('Buzz')
  else console.log(numero)
  numero++
}

/*
  Ejercicio 3
  Escribe un programa que cree un string que represente una cuadrícula de 8 ×
  8, usando caracteres de nueva línea para separar las líneas. En cada posición
  de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de
  formar un tablero de ajedrez.
*/

let tablero = ''
for (let row = 0; row < 8; row++) {
    for (let col = 0; col <8 ; col++) {
      if ((row + col) % 2 == 0) tablero += "#";
      else tablero += " ";
    }
    tablero += "\n"

}
console.log(tablero)