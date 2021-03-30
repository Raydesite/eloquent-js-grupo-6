function revertirArray(a){
    let c= [];
    for (let x of a) {
        c.unshift(x)
      }
    return c;
} 



function revertirArrayEnSuLugar(a){
     let x=0;
     while (x<((a.length)/2)){
        let c=a[a.length-x-1];
        a[a.length-x-1]=a[x];
        a[x]=c;
        x++;
    }
    return a;
    }

let uou=[1,2,3,4,5];
//console.log(revertirArray(uou));

revertirArrayEnSuLugar(uou);
console.log(uou);
