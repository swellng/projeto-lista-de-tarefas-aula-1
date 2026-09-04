const input = document.getElementById("tarefaInput");
const botaoAdicionar = document.getElementById("adicionarBtn");
const lista = document.getElementById("listaTarefas");
const mensagem = document.getElementById("mensagem");

function atualizarMensagem() {
    if (lista.children.length === 0) {
        mensagem.style.display = "block";
    } else {
        mensagem.style.display = "none";
    }
}

function adicionarTarefa() {
    const texto = input.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa antes de adicionar.");
        return;
    }

    const item = document.createElement("li");

    const tarefa = document.createElement("span");
    tarefa.textContent = texto;

    tarefa.addEventListener("click", function () {
        item.classList.toggle("concluida");
    });

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.className = "excluir";

    botaoExcluir.addEventListener("click", function () {
        item.remove();
        atualizarMensagem();
    });

    item.appendChild(tarefa);
    item.appendChild(botaoExcluir);
    lista.appendChild(item);

    input.value = "";
    input.focus();
    atualizarMensagem();
}

botaoAdicionar.addEventListener("click", adicionarTarefa);

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});

atualizarMensagem();
