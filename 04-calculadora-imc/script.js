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
        definirCor(status, container)
        escreverMensagem(nome.value, status, container)
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

const definirCor = (d, container) => {
    let status = String(d).toLowerCase()
    container.classList.remove('status1')
    container.classList.remove('status2')
    container.classList.remove('status3')
    container.classList.remove('status4')
    container.classList.remove('status5')
    container.classList.remove('status6')
    
    if (status == 'abaixo do peso') 
        container.classList.toggle('status1')
    else if (status ==  'peso normal')
         container.classList.toggle('status2')
    else if (status == 'sobrepeso' ) 
         container.classList.toggle('status3')
    else if (status == 'obesidade grau i') 
         container.classList.toggle('status4')
    else if (status == 'obesidade grau ii') 
         container.classList.toggle('status5')
    else if (status == 'obesidade grau iii')
         container.classList.toggle('status6') 
}

const escreverMensagem = (nome, status, container) => {
    // limpa o conteudo do container
    container.textContent = ''
    // cria um paragrafo
    let paragrafo = document.createElement('p')
    let paragrafo2 = document.createElement('p')

    paragrafo.textContent = `Nome: ${nome}.`
    paragrafo2.textContent = `Classificação: ${status}`

    // adiciona o pagragrafo no container
    container.appendChild(paragrafo)
    container.appendChild(paragrafo2)
}