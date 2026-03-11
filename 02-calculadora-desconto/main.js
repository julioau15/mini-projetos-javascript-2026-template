'use strict'

const calcularDesconto = () => {
    let precoOriginal = document.getElementById("input-preco-original").value
    let desconto = document.getElementById("input-desconto").value
    let container = document.getElementById('resultado')
    let precoFinal
    let valorEconomizado
    let cor

    if(!isvalid(precoOriginal) || !isvalid(desconto)){
        alert('ERRO! Por favor, digite um valor válido.')
        return
    }else{
        precoFinal =  Number(precoOriginal) - (Number(precoOriginal) * (Number(desconto) / 100))
        valorEconomizado = (Number(precoOriginal) - precoFinal).toFixed(2)
        cor = definirCor(desconto)
        escreverMensagem(`Com um desconto de ${desconto}% Você economizou R\$${valorEconomizado}.`, container, cor)
    }
}

// verifica se um dado é valido
const isvalid = (dado) => {
    if(isNaN(dado) || dado.trim() == '' || dado == undefined || dado == null){
        return false
    }else{
        return true
    }
}

const definirCor = (n) => {
    let desconto = Number(n)
    if(desconto <= 5)
        return '#14532d'
    else if (desconto <= 10)
        return '#713f12'
    else 
        return '#7f1d1d'
}

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