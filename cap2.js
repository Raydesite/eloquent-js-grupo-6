/**
 * Ciclo de un triángulo
 * Escriba un ciclo que haga siete llamadas a
 * console.log
 * para generar el siguiente
 * triángulo:
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 * 
 * Puede ser útil saber que puedes encontrar la longitud de un string escribiendo
 * .length
 * después de él:
 * let abc = "abc";
 * console.log(abc.length);
 * // → 3
 */

console.log('\nEjercicio 1\n');
let string = '#'; //Inicializar variable
while(string.length <= 7){ //Utilizo el ciclo mientras que variable <= 7
    console.log(string); //Muestro la variable
    string += '#'; //Sumo caracter a la cadena string
}

/**
 * FizzBuzz
 * Escribe un programa que use
 * console.log
 * para imprimir todos los números de
 * 1 a 100, con dos excepciones. Para números divisibles por 3, imprime
 * "Fizz" en lugar del número, y para los números divisibles por 5 (y no 3), imprime
 * "Buzz" en su lugar.
 * Cuando tengas eso funcionando, modifica tu programa para imprimir
 * "FizzBuzz", para números que sean divisibles entre 3 y 5 (y aún imprimir
 * "Fizz" o "Buzz" para números divisibles por solo uno de ellos).
 * (Esta es en realidad una pregunta de entrevista que se ha dicho elimina un
 * porcentaje significativo de candidatos a programadores. Así que si la puedes
 * resolver, tu valor en el mercado laboral acaba de subir).
 */

console.log('\nEjercicio 2\n');

for (let number = 1; number <= 100; number++) { //Recorro los numeros del 1 al 100
    if(number%3 == 0 && number%5 == 0){ //El orden de los if es importante! pregunto primero por los divisibles entre ambos
        console.log('FizzBuzz');
    } else if(number%3 == 0){ //luego divisibles entre 3
        console.log('Fizz');
    } else if(number%5 == 0){ //por ultimo los divisibles entre 5
        console.log('Buzz');
    }
}

/**
 * Tablero de ajedrez
 * Escribe un programa que cree un string que represente una cuadrícula de 8 ×8, 
 * usando caracteres de nueva línea para separar las líneas. En cada posición
 * de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de
 * formar un tablero de ajedrez.Pasar este string a
 * console.log
 * debería mostrar algo como esto:
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 * Cuando tengas un programa que genere este patrón, define una vinculación
 * tamaño = 8
 * y cambia el programa para que funcione con cualquier
 * tamaño, dando como salida una cuadrícula con el alto y ancho dados.
 */

console.log('\nEjercicio 3\n');

let widthBoard = 6; //ancho
let heigthBoard = 4; //alto
string = '';

for(let i = 0; i< widthBoard; i++){ //recorrer ancho
    for(let j = 0; j < heigthBoard; j++){ //recorrer alto
        string += (i + j)%2 == 0 ? "#" : " "; //Verificar pares para agregar a la cadena 
    }
    string += "\n"; //insertar salto de linea a la cadena cuando cambia de fila 
}
console.log(string); //imprimir cadena completa