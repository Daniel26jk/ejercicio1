function menoresDeSiete(nombres) {
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].length < 7) {
            console.log(nombres[i]);
        }
    }
}

let nombres = ["Sol", "Julieta", "María", "Roberto"];

menoresDeSiete(nombres);