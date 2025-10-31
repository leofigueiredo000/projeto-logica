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
