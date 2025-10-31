function main(){

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
main();
