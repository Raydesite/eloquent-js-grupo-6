// Igualdad Profunda
function igualdadProfunda (aa,bb,c=true) {
    if (aa==bb) return true;
    if (aa==null || bb==null || typeof(aa) != "object" || typeof(bb) != "object") return false;
    let xaa=Object.keys(aa).sort();
    let xbb=Object.keys(bb).sort();
    if (xaa.join()!==xbb.join()) return false;
    for (let x of xaa){        
        if (aa[x]!==null && bb[x]!==null && typeof(aa[x])=="object" && typeof(bb[x])=="object")
            igualdadProfunda(aa[x],bb[x],false);
        else if (aa[x]!==bb[x]) return false;
    }
    if (c==true) return true
}


let objeto = {aqui: {hay: "un"}, objeto: 2};
console.log(igualdadProfunda(3, 3));
// → true
console.log(igualdadProfunda(objeto, {aqui: 1, objeto: 2}));
// → false
console.log(igualdadProfunda(objeto, {aqui: {hay: "un"}, objeto: 2}));
// → true

