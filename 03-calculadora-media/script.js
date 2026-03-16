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
        definirCor(status, container)
        escreverMensagem(status, container)
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

const definirCor = (status, container) => {
    container.classList.remove('aprovado')
    container.classList.remove('reprovado')
    container.classList.remove('recuperacao')

    if(status.toLowerCase() == 'aprovado')
        container.classList.toggle('aprovado')
    else if (status.toLowerCase() == 'reprovado')
        container.classList.toggle('reprovado')
    else
        container.classList.toggle('recuperacao')

}

const escreverMensagem = (status, container) => {
    // limpa o conteudo do container
    container.textContent = ''
    // cria um paragrafo
    let paragrafo = document.createElement('p')

    paragrafo.textContent = `Aluno(a) ${status}.`

    // adiciona o pagragrafo no container
    container.appendChild(paragrafo)
}