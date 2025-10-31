function main(){

    let vitorias = 85;
    let derrotas = 1;
let saldo = calcularSaldoVitorias(vitorias,derrotas);
    console.log("O jogador tem " +calcularSaldoVitorias(vitorias,derrotas) + " saldo de vitórias");
    console.log("Seu rank é: " + calcularRank(vitorias,derrotas));
}
    
   function calcularSaldoVitorias(vitorias,derrotas){
  
    return vitorias - derrotas;
}

function calcularRank(saldo){
    let rank = saldo;

    if(rank <= 10){
        return "Ferro";
    }else if(rank > 10 && rank <= 20){
        return "Bronze";
    }else if(rank > 20 && rank <= 50){
        return "Prata";
    }else if(rank > 50 && rank <= 80){
        return "Ouro";
    }else if(rank > 80 && rank <= 90){
        return "Diamante";
    }else if(rank > 90 && rank <= 100){
        return "Lendário";
    }else{
        return "Imortal";
    }

}
main();
