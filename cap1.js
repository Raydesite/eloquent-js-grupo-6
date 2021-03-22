/**
 * Tipos de Datos
 */

//Cadenas de texto
    console.log('Hola Mundo'); 
    console.log("Hola Mundo");

    let numberGroup = 6;
    console.log(`Hola Mundo dice el grupo ${numberGroup}`);

//Números
    console.log('Núm. Positivo: ' + 10);
    console.log('Núm. Negativo: ' + -10);
    console.log('Núm. Decimal: ' + 0.10);

//Booleanos
    console.log('Valor verdadero: ' + true);
    console.log('Valor falso: ' +false);

//Otros
    console.log('Valor indefinido: ' + undefined);
    console.log('Valor Not a Number: ' +NaN);
    console.log('Valor Null: ' + null);

/**
 * Tipos de Operadores
 */

//Unarios [Un solo valor evaluado]
    let numberPositive = 45;
    console.log(`typeof de ${numberPositive}: ${typeof(numberPositive)}`); //Para saber tipo de dato
    console.log(`Negativo de ${numberPositive}: ${- numberPositive}`); //Para volver negativo un núm.
    console.log(`Negado de ${numberPositive}: ${! numberPositive}`); //Para negar un valor [devuelve booleano]

//Binarios [Dos valores evaluados] 
    console.log(`55 > 66: ${55 > 66}`); //Mayor que
    console.log(`77 < 1100: ${77 < 1100}`); //Menor que
    console.log(`'10' == 10: ${'10' == 10}`); //Igual que
    console.log(`'10' != 10: ${'10' != 10}`); //Distinto que
    console.log(`112 >= 112: ${112 >= 112}`); //Mayor o igual que
    console.log(`66 <= 88: ${66 <= 88}`); //Menor o igual que
    console.log(`'10' === 10: ${'10' === 10}`); //Identico

    console.log(`0 != 1 && 0 > 0: ${0 != 1 && 0 > 0}`);
    console.log(`0 != 1 || 0 >= 0: ${0 != 1 || 0 >= 0}`);

//Ternario
    let value = 11;

    //Código con if
    if(value == 12){
    console.log(`si value == 12: Hay 12`);
    } else {
    console.log(`si no: Hay 11`);
    }

    //Código con operador ternario

    (value == 12) ? console.log(`si value == 12: Hay 12`) : console.log(`si no: Hay 11`);    