const elementoTexto = document.getElementById("Texto")
const elementoAdd = document.getElementById("Add")
const elementoLista = document.querySelector("ul")

    if (localStorage.getItem("arraySalva") === ""){
        var tarefas = []
    } else{
        var tarefas = JSON.parse(localStorage.getItem("arraySalva"))
    }

function mostrarTarefa(){
    elementoLista.innerHTML = ''

    for (tarefa of tarefas){
        const elementoTarefa = document.createElement('li')
        const textoTarefa = document.createTextNode(tarefa)

        const elementoLink = document.createElement('a')
        const pos = tarefas.indexOf(tarefa)

        const linkText = document.createTextNode('X') 
        elementoLink.appendChild(linkText)

        elementoLink.setAttribute('onclick',`deletarTarefa(${pos})`)

        elementoTarefa.appendChild(textoTarefa)
        elementoLista.appendChild(elementoTarefa)
        elementoTarefa.appendChild(elementoLink)
    }
}



function addTarefa(){
    if (elementoTexto.value != ""){

        const textoTarefa = elementoTexto.value
        tarefas.push(textoTarefa)
        elementoTexto.value = ""

        mostrarTarefa()
        localStorage.setItem("arraySalva", JSON.stringify(tarefas))
    } else {
        window.alert('O campo está vázio!')
    }
    
}

function deletarTarefa(pos){
    tarefas.splice(pos, 1)
    mostrarTarefa()
    localStorage.setItem("arraySalva", JSON.stringify(tarefas))
}

function limpar(){
    localStorage.setItem("arraySalva", "")
    tarefas = []
    mostrarTarefa()
}
