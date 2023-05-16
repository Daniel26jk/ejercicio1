function laClaveSecreta(clave=  ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] ){   

    clave.reverse();
    let remplazo1=clave.join("");
    let remplazo2=remplazo1.split("*");
    let remplazo3=remplazo2.join("");
    return remplazo3;
    }
    console.log(laClaveSecreta())