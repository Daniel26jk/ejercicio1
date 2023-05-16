let mayor1 = 0
let mayor2 = 0
let mayor3 = 0

function tresMayores(n1){
    for(i=0;i<n1.length;i++){
       if(n1[i]>mayor1){
        mayor3=mayor2
        mayor2=mayor1
        mayor1=n1[i];
       }
    }
    return [mayor1,mayor2,mayor3]
}
let arreglo = [2,2,2,23,34,3]
console.log(tresMayores(arreglo))