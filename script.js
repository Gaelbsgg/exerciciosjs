// Exercício 1:

document.getElementById("clique-aqui").addEventListener("click", () => {
    funcao_a();
});
function funcao_a() {
    alert("Confirmado !")
};

// Exercício 2:

function solicitarMes() {
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    
    let numeroMes = prompt("Digite o número do mês desejado (01 a 12):");
    
    numeroMes = parseInt(numeroMes, 10);
    
    if (numeroMes >= 1 && numeroMes <= 12) {

        alert(numeroMes.toString().padStart(2, '0') + " - " + meses[numeroMes - 1]);
    } else {
        alert("Número do mês inválido. Por favor, digite um número entre 01 e 12.");
    }
}