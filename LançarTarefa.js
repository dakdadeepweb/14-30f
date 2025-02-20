// LançarTarefa.js
document.getElementById("form-tarefa").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nomeTarefa = document.getElementById("nome-tarefa").value;
    const dataEntrega = document.getElementById("data-entrega").value;
    const linkTarefa = document.getElementById("link-tarefa").value;

    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    tarefas.push({ nome: nomeTarefa, data: dataEntrega, link: linkTarefa });
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    alert("Tarefa lançada com sucesso!");
    document.getElementById("form-tarefa").reset();
});
