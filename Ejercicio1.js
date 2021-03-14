/*
Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente
triángulo:
#
##
###
####
#####
######
#######

Puede ser útil saber que puedes encontrar la longitud de un string escribiendo
.length después de él:
let abc = "abc";
console.log(abc.length);

*/


//version 1
let array = ["#"];
console.log(array);

for (let i=0;i<6;i++){
  
  let count = array.push('#');
  console.log(array);
  
}

//version 2


let abc = " ";
    //BUCLE FOR PRINCIPAL
    for (let i = 1; i <= 4; i++) {
      
        for ( let rep = 0; rep < i; rep++) {
           abc = abc + '#';
            console.log(abc);
        }
        
    }

