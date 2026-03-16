'use strict'

const calcularDesconto = () => {
    const precoOriginal = document.getElementById("input-preco-original")
    const desconto = document.getElementById("input-desconto")
    const container = document.getElementById('resultado')
    let precoFinal
    let valorEconomizado

    if(!isValid(precoOriginal.value, desconto.value) || !isLimit(0,100,desconto.value)){
        alert('ERRO! Por favor, digite um valor válido.')
        return
    }else{
        precoFinal =  Number(precoOriginal.value) - (Number(precoOriginal.value) * (Number(desconto.value) / 100))
        valorEconomizado = (Number(precoOriginal.value) - precoFinal).toFixed(2)
        definirCor(desconto.value, container)
        escreverMensagem(desconto.value,valorEconomizado, container)
        limparConteudo(precoOriginal, desconto)
        precoOriginal.focus()
    }
}

// verifica se um dado é valido
const isValid = (...d) => d.every(dado => !isNaN(dado) && dado.trim() != '' && dado != undefined && dado != null)

// valida se um numero esta no limite definido
const isLimit = (min, max, ...n) => n.every(numero => numero >= min && numero <= max)

// limpa o conteudo de um campo
const limparConteudo = (...d) =>d.forEach(dado => dado.value = '')

const definirCor = (n, container) => {
    let desconto = Number(n)
    container.classList.remove('desconto1')
    container.classList.remove('desconto2')
    container.classList.remove('desconto3')

    if(desconto <= 5)
        container.classList.toggle('desconto1')
    else if (desconto <= 10)
        container.classList.toggle('desconto2')
    else 
        container.classList.toggle('desconto3')
}

const escreverMensagem = (desconto, valorEconomizado, container, cor=null) => {
    // limpa o conteudo do container
    container.textContent = ''
    // cria um paragrafo
    let paragrafo = document.createElement('p')

    // caso não seja passado uma cor, ele não modifica
    if(cor != null)
        container.style.border = `2px solid ${cor}`

    paragrafo.textContent = `Com um desconto de ${desconto}% Você economizou R\$${valorEconomizado}.`

    // adiciona o pagragrafo no container
    container.appendChild(paragrafo)
}