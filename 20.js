function n1(nick){ 

    let vocales = ["A","E","I","O","U"];
    
    for (let x=0;x<nick.length;x++){
        for (let y=0;y<vocales.length;y++){
            if(((nick[x]).lastIndexOf(vocales[y]))==0){
                console.log(nick[x]);
            }
        }
    }
     }
    let nombres = ["Agustina","Tomas","Juana","Ursula","Ernesto"];
    
    
    console.log(n1(nombres));