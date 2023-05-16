var readline = require("readline-sync");
var readline = require("readline-sync");
let n1 = readline.question("Ingresar un numero: ");
if((n1>=5)&&(n1<=10)) {
    console.log("aprobado")
} else if((n1<=4)&&(n1<=0)){
    console.log("Reprobado")
} else if (n1>=11){
    console.log("no encontrado")
}