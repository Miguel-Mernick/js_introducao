const clicou = () => {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    
    // Exibir a soma no alerta
    let soma = num1 + num2;
    
    // Exibir o resultado na página
    document.getElementById("resultado").textContent = "A soma é: " + soma;
};

document.getElementById('meuBotao').addEventListener('click', clicou);