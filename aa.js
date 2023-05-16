let nombres=["dafne", "daniel"]
let notas=[7,3];

function parcial(n1,n2){
    for(i=0;i<n2.length;i++)
    if(n2[i]>=6){
        console.log("el alumno" + n1[i] + "aprobo" + n2[i]);
    }
    else if(n2[i]<=4){
        console.log("el alumno" + n1[i] + "desaprobo" + n2[i])
    }
}
parcial(nombres, notas)