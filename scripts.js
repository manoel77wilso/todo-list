const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []

function adicionarNovaTarefa(){
    minhaListaDeItens.push({
        tarefa: input.value,
        conluida: false,
    });
    input.value = ''
    mostrarTarefas();
  
}

function mostrarTarefas(){

    let novaLi = ''

    minhaListaDeItens.forEach((item,index) => {
        novaLi += `
            <li class="tasks ${item.conluida && "done"}">
                <img src="img/checked.png" alt="check-na-tarefa" onclick = "concluirTarefa(${index})">
                <p>${item.tarefa}</p>
                <img src="img/trash.png" alt="tarefa-para-lixo" onclick = "deletarItem(${index})">
            </li>
        `

    })
    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

//Concluir tarefa
function concluirTarefa(index){
    minhaListaDeItens[index].conluida = !minhaListaDeItens[index].conluida
    mostrarTarefas(); 
}


// botão deletar
function deletarItem(index){
    minhaListaDeItens.splice(index,1)
    mostrarTarefas(); 
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista');

    if (tarefasDoLocalStorage){
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage);
    }

    
    mostrarTarefas()
}

recarregarTarefas()

button.addEventListener('click',adicionarNovaTarefa)
