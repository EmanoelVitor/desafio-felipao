var nivel;
let saldoRankeada = checkNivel(52, 10)
console.log("O Herói tem de saldo de "+saldoRankeada+" está no nível de "+nivel)

function checkNivel(vitoria, derrota) {
    
    if (vitoria <= 10) {
        nivel = "Prata";
    }
    else if (vitoria >= 11 && vitoria <= 20) {
        nivel = "Bronze"
    }
    else if (vitoria >= 21 && vitoria <= 50) {
        nivel = "Prata";
    }
    else if (vitoria >= 51 && vitoria <= 80) {
        nivel = "Ouro";
    }
    else if (vitoria >= 81 && vitoria <= 90) {
        nivel = "Diamante";
    }
    else if (vitoria >= 91 && vitoria <= 100) {
        nivel = "Lendario";
    }
    else {
        nivel = "Imortal";
    }
    
    return saldo = vitoria - derrota;

}

