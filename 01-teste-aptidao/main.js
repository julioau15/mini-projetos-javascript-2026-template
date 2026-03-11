'use strict'

// verifica se esta apto ou não
const testarAptidao = () => {
    let tempo = document.getElementById('input-tempo').value
    let container = document.getElementById('resultado')
    let resultado
    let cor
    

    // validação
    if(!isvalid(tempo)){
        alert('ERRO! Por favor, digite um valor válido.')
        return
    }else{
        // define resultado e cor
        if(Number(tempo) < 14){
            resultado = 'Apto'
            cor = '#14532d'
        }else{
            resultado = 'Não Apto'
            cor = '#7f1d1d'
        }

        // chama escrever mensagem
        escreverMensagem(resultado, container, cor)
    }
}

// escreve uma mensagem em algum container
const escreverMensagem = (mensagem, container, cor=null) => {
    // limpa o conteudo do container
    container.textContent = ''
    // cria um paragrafo
    let paragrafo = document.createElement('p')
    paragrafo.textContent = mensagem

    // caso não seja passado uma cor, ele não modifica
    if(cor != null)
        paragrafo.style.color = cor

    // adiciona o pagragrafo no container
    container.appendChild(paragrafo)
}

// verifica se um dado é valido
const isvalid = (dado) => {
    if(isNaN(dado) || dado.trim() == '' || dado == undefined || dado == null){
        return false
    }else{
        return true
    }
}
