var readline = require("readline-sync");
let n1 = readline.question("Ingresar un numero: ");
if(n1>=5){
    console.log("aprobado")
} else if(n1<=4){
    console.log("Reprobado")
}
