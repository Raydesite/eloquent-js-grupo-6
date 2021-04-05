function arrayALista(a){
    let list= null;
    for (let x = a.length-1; x>=0; x--){
        list={Valor:a[x],Resto:list};
    }
return list;
}


function listaAArray (a){
    let arr=[];
    let b=0;
    function cc (a) {   
        for (let x in a){
            if (x=="Valor") {
                arr[b]=a.Valor;
                b++;
            }
            if (x=="Resto" && a.Resto!=null) cc(a.Resto);             
        }
        return arr;     
    }
    return cc(a);
    
}

//console.log(arrayALista([1,2,3,4]));
console.log(listaAArray(arrayALista([1,2,3,4])));
