var readline = require("readline-sync");
let n1 = readline.question("Ingrese un numero: ");
if ((n1>=7)&&(n1<=18)){
    console.log("ENCONTRADO");
}
else if((n1>=0)&&(n1<=6)){
    console.log("NO ENCONTRADO");
}
else if((n1>=19)){
    console.log("NO ENCONTRADO")
}
