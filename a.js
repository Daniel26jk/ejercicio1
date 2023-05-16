let notas = [6, 5];
let nombres = ["Dafne", "Erik"];


function parcial(nombres, notas){
    for(i=0;i<notas.length;i++)
    if(notas[i]>=6){
        console.log("el alumno: " + nombres[i]+ " aprobado con " +notas[i])
    }
    else{
        console.log("el alumno: " + nombres[i] +  " desaprobado con: " + notas[i])
    }
}
parcial(nombres, notas)