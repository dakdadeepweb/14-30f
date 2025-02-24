const alunos = [
    "rosiearegold279", "Kanecfcbfr", "miraculizado", "Mathspa", "tensosinho_str",
    "Ked0_0", "jonybee__74049", "Ayu03212", "phelixcoisinho", "cf_elisa99_08545",
    "rosaluc_", "hakila0773", "danielcraftim", "Felix092971", "lexx2218",
    "blackxzsr", "dancra57", "https_meow", "eliseueureka_74818", "lilnick698",
    "eric.rossi", "macacomago", "gwentennyson_2010", "jw_1980", "meucoelho",
    "nicolas120795", "brenopwf", "Quited_quited", "ellienigenaa", "solaria",
    "marlissonblanc", "Jujutsu_Kaisen", "mpcmaster2024", "bugnette", "blackxzsr",
    "bywaldorf", "realm_of_jewels", "princessofstars3", "ronald_claw_26",
    "coeio0177", "o_ryan.55", "_harizz11", "springtrap4947", "tenosinho_str",
    "lisa038149", "pvd_ozzie.zz_67296", "verdadeirawikipedia", "babyz",
    "mapadeluz", "Pippoholand", "mim1zrsh", "dearladyjupter", "symphonny.z",
    "brinnbolen", "luckza8", "sonecadom"
];

const listaAlunos = document.getElementById("lista-alunos");

// Criar as linhas da tabela para cada aluno
alunos.forEach(aluno => {
    const tr = document.createElement("tr");

    const tdNome = document.createElement("td");
    tdNome.textContent = aluno;

    const tdPresente = document.createElement("td");
    const btnPresente = document.createElement("button");
    btnPresente.textContent = "✔️";
    btnPresente.style.backgroundColor = "lightgreen";
    btnPresente.onclick = () => {
        btnPresente.style.backgroundColor = "green";
        btnFaltou.style.backgroundColor = "lightcoral";
    };
    tdPresente.appendChild(btnPresente);

    const tdFaltou = document.createElement("td");
    const btnFaltou = document.createElement("button");
    btnFaltou.textContent = "❌";
    btnFaltou.style.backgroundColor = "lightcoral";
    btnFaltou.onclick = () => {
        btnFaltou.style.backgroundColor = "red";
        btnPresente.style.backgroundColor = "lightgreen";
    };
    tdFaltou.appendChild(btnFaltou);

    tr.appendChild(tdNome);
    tr.appendChild(tdPresente);
    tr.appendChild(tdFaltou);
    listaAlunos.appendChild(tr);
});

// Evento para salvar a chamada
document.getElementById("salvar-frequencia").onclick = () => {
    let presentes = [];
    let faltantes = [];

    document.querySelectorAll("#lista-alunos tr").forEach(row => {
        let nomeAluno = row.cells[0].textContent;
        let btnPresente = row.cells[1].querySelector("button");
        if (btnPresente.style.backgroundColor === "green") {
            presentes.push(nomeAluno);
        } else {
            faltantes.push(nomeAluno);
        }
    });

    let mensagem = `📌 **Frequência do Dia**\n\n✅ **Presentes:**\n${presentes.join(", ")}\n\n❌ **Faltantes:**\n${faltantes.join(", ")}`;

    // Abre o e-mail para enviar
    window.location.href = `mailto:?subject=Chamada do Dia&body=${encodeURIComponent(mensagem)}`;
};

