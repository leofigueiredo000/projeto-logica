<<<<<<< HEAD
// Os níveis são constantes e podem ser definidos fora da função principal
const niveis = [
    { nome: "Ferro", minVit: 0, maxVit: 10 },
    { nome: "Bronze", minVit: 11, maxVit: 20 },
    { nome: "Prata", minVit: 21, maxVit: 50 },
    { nome: "Ouro", minVit: 51, maxVit: 80 },
    { nome: "Diamante", minVit: 81, maxVit: 90 },
    { nome: "Lendário", minVit: 91, maxVit: 100 },
    { nome: "Imortal", minVit: 101 }
];

/**
 * Calcula o saldo de vitórias.
 * @param {number} vitorias - Número de vitórias.
 * @param {number} derrotas - Número de derrotas.
 * @returns {number} O saldo de vitórias.
 */
function calcularSaldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}

/**
 * Determina o nível do herói com base no saldo de vitórias.
 * @param {number} saldoVitorias - O saldo de vitórias do herói.
 * @returns {string} O nome do nível do herói.
 */
function obterNivelHeroi(saldoVitorias) {
    // Percorre a lista de níveis de trás para frente, é mais eficiente para encontrar o nível correto.
    for (let i = niveis.length - 1; i >= 0; i--) {
        const nivel = niveis[i];
        if (saldoVitorias >= nivel.minVit) {
            return nivel.nome;
        }
    }
    // Caso o saldo seja negativo, retorna o nível mais baixo.
    return niveis[0].nome;
}

function main() {
    let vitorias = 105;
    let derrotas = 5;
    let saldo = calcularSaldoVitorias(vitorias, derrotas);
    let nivel = obterNivelHeroi(saldo);

    console.log(`O Herói tem saldo de ${saldo} e está no nível de ${nivel}`);
}

main(); // Inicia o programa
=======
function main(){

<<<<<<< HEAD
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
=======
    let vitorias = 80;
    let derrotas = 20;
    // A função calcularSaldoVitorias é chamada e seu resultado é guardado na variável 'saldo'
    let saldo = calcularSaldoVitorias(vitorias, derrotas);
    
    // Exibimos o resultado no console de uma forma clara
    console.log(`O saldo de vitórias é: ${saldo}`);
}

function calcularSaldoVitorias(vitorias,derrotas){
    // A função simplesmente calcula e retorna o resultado
    return vitorias - derrotas;
}

// --- Início do Programa ---
// Esta linha executa a função 'main', dando início ao seu código.
>>>>>>> d0da1fda334fa991737139a94f633bfca11a323b
main();
>>>>>>> d0da1fda334fa991737139a94f633bfca11a323b
