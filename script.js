// JS = JavaScript = Linguagem de Programação //
// Váriáveis = Espaço de memória do computador//

function calcularDolar(){
    let real = document.getElementById("input-real").value //variável guarda valor do real digitado
    let dolar = document.getElementById("input-dolar").value // varialvel guarda valor do dolar digitado

    let resultado = real / dolar // variavel guarda o valor do resultado

    alert(resultado) // mostra na tela o resultado
}

function calcularDolar() {
    let real = parseFloat(document.getElementById("input-real").value); // Converte o valor do input para número
    let dolar = parseFloat(document.getElementById("input-dolar").value); // Converte o valor do input para número

    // Verifica se os valores são válidos
    if (isNaN(real) || isNaN(dolar) || dolar === 0) {
        alert("Por favor, insira valores válidos para Real e Dólar. O valor do Dólar não pode ser zero.");
        return;
    }

    let resultado = real / dolar; // Realiza o cálculo
    alert(`O valor convertido é: ${resultado.toFixed(2)} dólares.`); // Mostra o resultado formatado com 2 casas decimais
}
