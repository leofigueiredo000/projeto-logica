const niveis = [
  { nome: "ferro", minVit: 0, maxVit: 10 },
  { nome: "bronze", minVit: 11, maxVit: 20 },
  { nome: "prata", minVit: 21, maxVit: 50 },
  { nome: "ouro", minVit: 51, maxVit: 80 },
  { nome: "diamante", minVit: 81, maxVit: 90 },
  { nome: "Lendário", minVit: 91, maxVit: 100 },
  { nome: "Imortal", minVit: 101 },
];

function saldoVitorias(vitorias, derrotas) {
  return vitorias - derrotas;
}

function calcularRank(saldo) {
  for (let i = niveis.length - 1; i > 0; i--) {
    const nivel = niveis[i];

    if (saldo >= nivel.minVit) {
      return nivel.nome;
    }
  }
}

function main() {
  let vitorias = 110;
  let derrotas = 0;

  let saldo = saldoVitorias(vitorias, derrotas);
  let rank = calcularRank(saldo);

  console.log("O saldo de vitórias é " + saldo + " e o rank é: " + rank);
}
main();
