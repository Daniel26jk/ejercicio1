function obtenerMayor(arreglo){
    let mayor = arreglo[0];
   
    for(a = 0;a < arreglo.length; a++){
        if (mayor < arreglo[a])
        {
            mayor = arreglo[a];
        }
    }
  
    return mayor
  }
  
  
  let arreglo1 = [3,6,2,32];
  let arreglo2 = [5,7,12,3,2,4];
   
  console.log(obtenerMayor(arreglo1));
  console.log(obtenerMayor(arreglo2)); 
  