'use strict'

const calcularMedia = () => {
    const nota1 = document.getElementById('input-nota1')
    const nota2 = document.getElementById('input-nota2')
    const nota3 = document.getElementById('input-nota3')
    const container = document.getElementById('resultado')
    let media
    let status
    let cor

    if(!isValid(nota1.value, nota2.value, nota3.value) || !isLimit(0,10,nota1.value,nota2.value,nota3.value)){
        alert('ERRO! Por favor, digite um valor válido.')
        nota1.focus()
        return
    }else{
        media = (Number(nota1.value) + Number(nota2.value) + Number(nota3.value)) / 3
        status = definirStatus(media)
        cor = definirCor(status)
        escreverMensagem(status, container, cor)
        limparConteudo(nota1, nota2, nota3)
        nota1.focus()
    }
}

// verifica se um dado é valido
const isValid = (...d) => d.every(dado => !isNaN(dado) && dado.trim() != '' && dado != undefined && dado != null)

// valida se um numero esta no limite definido
const isLimit = (min, max, ...n) => n.every(numero => numero >= 0 && numero <= 10)

// limpa o conteudo de um campo
const limparConteudo = (...d) => d.forEach(dado => dado.value = '')

const definirStatus = (med) => {
    let media = Number(med)
    if(media >= 7)
        return 'Aprovado'
    else if (media >= 5)
        return 'Recuperação'
    else
        return 'Reprovado'
        
}

const definirCor = (d) => {
    let status = String(d).toLowerCase()
    if(status == 'aprovado')
        return '#14532d'
    else if (status == 'recuperação')
        return '#713f12'
    else 
        return '#7f1d1d'
}

const escreverMensagem = (status, container, cor=null) => {
    // limpa o conteudo do container
    container.textContent = ''
    // cria um paragrafo
    let paragrafo = document.createElement('p')

    // caso não seja passado uma cor, ele não modifica
    if(cor != null)
        container.style.border = `1px solid ${cor}`

    paragrafo.textContent = `Aluno(a) ${status}.`

    // adiciona o pagragrafo no container
    container.appendChild(paragrafo)
}