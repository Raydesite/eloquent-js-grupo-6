// Ejercicios Eloquent JavaScript - Capitulos 2 y 3



// Capitulo 2 - Estructura de programas

// Ciclo de un triangulo

/*
let e = "";
for(let n=0; n<7; n++){
    e = e + "#";
	console.log(e);
}
*/

// FizzBuzz 1
/*
for(let n=1; n<=100; n++){
		if (n%3==0) { 
			console.log(n + " Fizz");
			}
		else if (n%5==0){
			console.log(n + " Buzz");
		}
		else{
			console.log(n);
		}	
		}

*/

// FizzBuzz 2
/*
for(let n=1; n<=100; n++){
		if (n%3==0 && n%5==0) { 
			console.log(n + " FizzBuzz");
		}
		else if (n%3==0){
			console.log(n + " Fizz");
		}
		else if (n%5==0){
			console.log(n + " Buzz");
		}
		else{
			console.log(n);
		}
			
		}
*/

// Tablero de Ajedrez

/*
let f=8;
let c=8;
c++;
t=""
for(let n=1; n<=f*c; n++){
	if (n%c==0){
		t=t+"\n";
	}
	else if (n%2==0){
		t=t+"#";
	}
	else {
		t=t+" ";
	}
}

console.log(t);
*/

// Capitulo 3 - Funciones

//Conteo de frijoles 
//Se desarrollo solo una función que aplica para ambos casos planteados
/*
function contarFs(a,b="F") {
	let f=0;
	for (let x in a){
		if (a[x]===b) f++;
	}
	return f;
}
console.log(contarFs("Florido"));
console.log(contarFs("Florido","o"));
*/

//Mínimo

// Esta es la manera como lo pide el ejercicio
/*
function min(a,b) {
	if (b<a) (a=b);
	return a;
}
console.log(min(1,3));
*/

/*
// De esta manera aplica para encontrar el minimo de cualquier cantidad de numeros
function minimo (a) {
	let f=a[0];
	for (let x in a){
		if (a[x]<f) (f=a[x]);
	}
	return f;
}
console.log(minimo([3,7,9]));
*/

// Recursión
/*
function esPar (n) {
	if (n<0) n*=-1;
	if (n==0) return true;
	else if (n===1) return false;
	else return esPar(n-2);
	}

console.log(esPar(1002));
*/
