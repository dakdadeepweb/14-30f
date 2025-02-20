// Número de faltas de cada aluno (os alunos com mais de 10 faltas começam como inativos)
const faltas = {
    rosiearegold279: 5,
    Kanecfcbfr: 3,
    miraculizado: 11,  // Este aluno tem mais de 10 faltas e começa como inativo
    Mathspa: 0,
    tensosinho_str: 6,
    // Continue com o resto dos alunos conforme necessário...
};

// Função para inicializar a chamada
function inicializarChamada() {
    // Loop pelos alunos para verificar o número de faltas
    for (const aluno in faltas) {
        const statusElement = document.getElementById(aluno);
        const presenteButton = statusElement.querySelector(".presente");
        const faltaButton = statusElement.querySelector(".falta");

        // Se o aluno tiver mais de 10 faltas, ele começa como inativo
        if (faltas[aluno] > 10) {
            presenteButton.disabled = true;  // Desabilita o botão de presença
            faltaButton.disabled = false;   // Habilita o botão de falta
            faltaButton.style.backgroundColor = "red";
        } else {
            presenteButton.disabled = false;  // Habilita o botão de presença
            faltaButton.disabled = false;   // Habilita o botão de falta
            faltaButton.style.backgroundColor = "";
        }
    }
}

// Função para alternar entre presença e falta
function alterarStatus(alunoId, isPresente) {
    const statusElement = document.getElementById(alunoId);
    const presenteButton = statusElement.querySelector(".presente");
    const faltaButton = statusElement.querySelector(".falta");

    if (isPresente) {
        presenteButton.style.backgroundColor = "green";
        faltaButton.style.backgroundColor = "";
    } else {
        faltaButton.style.backgroundColor = "red";
        presenteButton.style.backgroundColor = "";
    }
}

// Função para salvar a chamada (pode ser expandida para salvar em um banco de dados ou arquivo)
function salvarChamada() {
    alert("Chamada salva com sucesso!");
}

// Chama a função para inicializar o status dos alunos
inicializarChamada();
