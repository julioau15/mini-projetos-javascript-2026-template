'use strict'

const calcularIMC = () => {
    const nome = document.getElementById('input-nome')
    const altura = document.getElementById('input-altura')
    const peso = document.getElementById('input-peso')
    const container = document.getElementById('resultado')
    let IMC
    let status
    let cor

    if(!isValid(altura.value, peso.value) || !isLimit(0,4,altura.value) || !isLimit(0,500,peso.value)){
        alert('ERRO! Por favor, digite um valor válido.')
        nome.focus()
        return
    }else{
        IMC = Number(peso.value) / (Number(altura.value) * Number(altura.value))
        status = definirStatus(IMC)
        cor = definirCor(status)
        escreverMensagem(nome.value, status, container, cor)
        limparConteudo(nome,altura,peso)
        nome.focus()
    }
}

// verifica se um dado é valido
const isValid = (...d) => d.every(dado => !isNaN(dado) && dado.trim() != '' && dado != undefined && dado != null)

// valida se um numero esta no limite definido
const isLimit = (min, max, ...n) => n.every(numero => numero >= min && numero <= max)

// limpa o conteudo de um campo
const limparConteudo = (...d) => d.forEach(dado => dado.value = '')

const definirStatus = (n) => {
    let imc = Number(n)
    if(imc < 18.5)
        return 'Abaixo do peso'
    else if (imc < 25 && imc >= 18.5)
        return 'Peso normal'
    else if(imc < 30 && imc >= 25)
        return 'Sobrepeso'
    else if(imc < 35 && imc >= 30)
        return 'Obesidade grau I'
    else if (imc < 40 && imc >= 35)
        return 'Obesidade grau II'
    else
        return 'Obesidade grau III'
        
}

const definirCor = (d) => {
    let status = String(d).toLowerCase()
    
    if (status == 'abaixo do peso') 
        return '#1e3a5f'
    else if (status ==  'peso normal')
        return '#14532d'
    else if (status == 'sobrepeso' ) 
        return '#713f12'
    else if (status == 'obesidade grau i') 
        return '#7f1d1d'
    else if (status == 'obesidade grau ii') 
        return '#6b0f0f'
    else if (status == 'obesidade grau iii')
        return '#450a0a' 
}

const escreverMensagem = (nome, status, container, cor=null) => {
    // limpa o conteudo do container
    container.textContent = ''
    // cria um paragrafo
    let paragrafo = document.createElement('p')
    let paragrafo2 = document.createElement('p')

    // caso não seja passado uma cor, ele não modifica
    if(cor != null)
        container.style.border = `1px solid ${cor}`

    paragrafo.textContent = `Nome: ${nome}.`
    paragrafo2.textContent = `Classificação: ${status}`

    // adiciona o pagragrafo no container
    container.appendChild(paragrafo)
    container.appendChild(paragrafo2)
}