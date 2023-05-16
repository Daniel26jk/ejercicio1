function menos(arreglo){
    let menor=arreglo[0];
    for(i=0;i<arreglo.length;i++){
        if(menor>arreglo[i])
        {
            menor=arreglo[i]
        }
    }
    return(menor)
}  
let si= [2,3,4,44,32,2];

console.log(menos(si))