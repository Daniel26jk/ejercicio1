var readline = require("readline-sync");
console.log("Programa de registo: ");
console.log("Si desea salir escriba 'salir': ")
let alumnos = [];
let nota = [];
let i=0
let promedio=[]
while(true){
    let nombre = readline.question("Ingresar nombre del alumno: ")
    if(nombre=='salir')
    break;

    let n1 = readline.questionInt("Ingresar nota del parcial 1: ");
    let n2 = readline.questionInt("Ingresar nota del parcial 2: ");
    let n3 = readline.questionInt("Ingresar nota del parcial 3: ");

    alumnos[i]=nombre
    nota[i]=[n1,n2,n3]
    promedio[i]=(n1+n2+n3) /3
    console.log("el alumno: "+ nombre + " tiene como nota en el primer parcial 2: " + n1+ " tiene la nota del parcial 2: " +n2+ " tiene la nota del parcial 3: " +n3)
    i++
}
for(i=0;i<alumnos.length;i++){
    console.log("el alumno: " + alumnos[i] + " "+ "tiene como nota del primer parcial: "+ " " + nota[i][0] + " " + "del segundo: "+ " " + nota[i][1]+ " " + "del tercero: "+ nota[i][2])
    console.log(alumnos[i] + " tiene como promedio: " + promedio[i]);
}



