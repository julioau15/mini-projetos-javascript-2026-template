'use strict'

const calcularDesconto = () => {
    let precoOriginal = document.getElementById("input-preco-original")
    let desconto = document.getElementById("input-desconto")
    let container = document.getElementById('resultado')
    let precoFinal
    let valorEconomizado
    let cor

    if(!isValid(precoOriginal.value, desconto.value) || !isLimit(0,100,desconto.value)){
        alert('ERRO! Por favor, digite um valor válido.')
        return
    }else{
        precoFinal =  Number(precoOriginal.value) - (Number(precoOriginal.value) * (Number(desconto.value) / 100))
        valorEconomizado = (Number(precoOriginal.value) - precoFinal).toFixed(2)
        cor = definirCor(desconto.value)
        escreverMensagem(desconto.value,valorEconomizado, container, cor)
        limparConteudo(precoOriginal, desconto)
        precoOriginal.focus()
    }
}

// verifica se um dado é valido
const isValid = (...d) => d.every(dado => !isNaN(dado) && dado.trim() != '' && dado != undefined && dado != null)

// valida se um numero esta no limite definido
const isLimit = (min, max, ...n) => n.every(numero => numero >= 0 && numero <= 100)

// limpa o conteudo de um campo
const limparConteudo = (...d) =>d.forEach(dado => dado.value = '')

const definirCor = (n) => {
    let desconto = Number(n)
    if(desconto <= 5)
        return '#14532d'
    else if (desconto <= 10)
        return '#713f12'
    else 
        return '#7f1d1d'
}

const escreverMensagem = (desconto, valorEco, container, cor=null) => {
    // limpa o conteudo do container
    container.textContent = ''
    // cria um paragrafo
    let paragrafo = document.createElement('p')
    let valorEconomizado = document.createElement('p')
    valorEconomizado.innerText = `${valorEco}`

    // caso não seja passado uma cor, ele não modifica
    if(cor != null)
        valorEconomizado.style.color = cor

    paragrafo.textContent = `Com um desconto de ${desconto}% Você economizou R\$${valorEconomizado.value}.`

    // adiciona o pagragrafo no container
    container.appendChild(paragrafo)
}