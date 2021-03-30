function arrayALista(a){
    let list= null;
    for (let x = a.length; x>=0; x--){
        list={Valor:a[x],Resto:list};
    }
return list;
}

console.log(arrayALista([1,2,3,4]));