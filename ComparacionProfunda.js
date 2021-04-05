// comparacion profunda

// el metodo sort ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado

//Object.keys() devuelve las propiedades del array

const comparacionProfunda = (a,b) => {
    let aValue = Object.keys(a).sort();
    let bValue = Object.keys(b).sort();
     
      if(aValue.length !== bValue.length){
        return false;
      }
      for(let i =0; i<aValue.length; i++){
        if (a[aValue[i] !== b[bValue[i]]])      {
          return false;
        }
      }
     
     return true;
    
    }
    let obj1 = {a: 12,b:'maria'};
    let obj2 = {a:12, c: 4, b: 1};
    
    console.log(comparacionProfunda(obj1,obj2))
    console.log( !comparacionProfunda(obj1,obj2))