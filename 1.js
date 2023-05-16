
var readline = require("readline-sync");
let n1= readline.questionInt("ingresar numero: ")
let n2= readline.questionInt("ingresar numero: ")

function mayor(m1,m2){
    if(m1>m2){
        return "el numero mayor es: " + m1
    }
    else if(m2>m1){ 
        return "el numero mayor es: " + m2 }

    else if(m1==m2){
        return "son iguales"
    }
}
console.log(mayor(n1,n2))