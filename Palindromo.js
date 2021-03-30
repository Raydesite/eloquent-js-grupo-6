/** 
 * Verifica si una palabra es palindromo o no
 * palindromo significa que se escribe igual al derecho y al reves
 * 
*/

const palindromo = function (palabra){
    let palabraInvertida =palabra.split("").reverse().join("");
    console.log(palabraInvertida);

    if (palabraInvertida === palabra){
        console.log(' es palindromo')
    } else {
        console.log('no es palindromo')
    }
    
}
palindromo("ojo");


