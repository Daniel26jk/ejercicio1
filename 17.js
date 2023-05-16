let promedio=0
function siAprobo(matriz){
    for(i=0;i<matriz.length;i++){
        promedio += matriz[i]
    }
    return promedio/matriz.length
}

let array = [3,3]

console.log(siAprobo(array))