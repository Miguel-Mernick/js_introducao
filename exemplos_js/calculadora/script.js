// Função para alternar entre calculadora e conversor
function alternar() {
    const opcao = document.getElementById("opcao").value;
    const calculadora = document.getElementById("calculadora");
    const conversor = document.getElementById("conversor");

    // Exibe a seção correta com base na seleção
    if (opcao === "calculadora") {
        calculadora.classList.add("active");
        conversor.classList.remove("active");
    } else {
        conversor.classList.add("active");
        calculadora.classList.remove("active");
    }
}

// Funções da calculadora

const soma = () => {
    let nu1 = parseFloat(document.getElementById("n1").value);
    let nu2 = parseFloat(document.getElementById("n2").value);
    if (isNaN(nu1) || isNaN(nu2)) {
        alert("Por favor, insira números válidos!");
        return;
    }
    let resultado = nu1 + nu2;
    document.getElementById("resultadoCalculadora").textContent = "Resultado: " + resultado;
};

const subtracao = () => {
    let nu1 = parseFloat(document.getElementById("n1").value);
    let nu2 = parseFloat(document.getElementById("n2").value);
    if (isNaN(nu1) || isNaN(nu2)) {
        alert("Por favor, insira números válidos!");
        return;
    }
    let resultado = nu1 - nu2;
    document.getElementById("resultadoCalculadora").textContent = "Resultado: " + resultado;
};

const divisao = () => {
    let nu1 = parseFloat(document.getElementById("n1").value);
    let nu2 = parseFloat(document.getElementById("n2").value);
    if (isNaN(nu1) || isNaN(nu2)) {
        alert("Por favor, insira números válidos!");
        return;
    }
    if (nu2 === 0) {
        alert("Não é possível dividir por zero!");
        return;
    }
    let resultado = nu1 / nu2;
    document.getElementById("resultadoCalculadora").textContent = "Resultado: " + resultado;
};

const multiplicacao = () => {
    let nu1 = parseFloat(document.getElementById("n1").value);
    let nu2 = parseFloat(document.getElementById("n2").value);
    if (isNaN(nu1) || isNaN(nu2)) {
        alert("Por favor, insira números válidos!");
        return;
    }
    let resultado = nu1 * nu2;
    document.getElementById("resultadoCalculadora").textContent = "Resultado: " + resultado;
};

// Função de conversão de moedas
const converter = () => {
    let valor = parseFloat(document.getElementById("valor").value);
    let moeda = document.getElementById("moeda").value;
    let resultadoConversao = 0;

    // Definindo as taxas de conversão aproximadas
    const taxas = {
        euro: 6.0, // 1 Euro = 6.0 BRL
        dolar: 5.8, // 1 Dólar = 5.8 BRL
        libra: 7.2 // 1 Libra = 7.2 BRL
    };

    if (!valor || valor <= 0) {
        alert("Por favor, insira um valor válido para a conversão.");
        return;
    }

    // Calculando a conversão com base na moeda selecionada
    switch (moeda) {
        case "euro":
            resultadoConversao = valor * taxas.euro;
            break;
        case "dolar":
            resultadoConversao = valor * taxas.dolar;
            break;
        case "libra":
            resultadoConversao = valor * taxas.libra;
            break;
        default:
            alert("Selecione uma moeda válida.");
            return;
    }

    // Exibindo o resultado da conversão
    document.getElementById("resultadoConversao").textContent = `Valor em Real: R$ ${resultadoConversao.toFixed(2)}`;
};

// Chama a função para inicializar o layout correto ao carregar a página
alternar();
