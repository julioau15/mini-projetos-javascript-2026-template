'use strict'

// verifica se esta apto ou não
const testarAptidao = () => {
    const tempo = document.getElementById('input-tempo')
    const container = document.getElementById('resultado')
    let resultado
    let cor
    

    // validação
    if(!isValid(tempo.value) || !isLimit(0,100,tempo.value)){
        alert('ERRO! Por favor, digite um valor válido.')
        return
    }else{
        // define resultado
        if(Number(tempo.value) < 14){
            resultado = 'Apto'
        }else{
            resultado = 'Não Apto'
        }

        definirCor(resultado, container)

        // chama escrever mensagem
        escreverMensagem(resultado, container, tempo.value)
        limparConteudo(tempo)
        tempo.focus()
    }
}

const definirCor = (resultado, container) => {
    container.classList.remove('apto')
    container.classList.remove('nao-apto')

    if(resultado.toLowerCase() == 'apto')
        container.classList.toggle('apto')
    else if (resultado.toLowerCase() == 'não apto')
        container.classList.toggle('nao-apto')

}

// escreve uma mensagem em algum container
const escreverMensagem = (mensagem, container, tempo) => {
    // limpa o conteudo do container
    container.textContent = ''
    // cria um paragrafo
    let paragrafo = document.createElement('p')
    paragrafo.textContent = `Com o tempo de ${tempo} você está ${mensagem}`

    // adiciona o pagragrafo no container
    container.appendChild(paragrafo)
}

// verifica se um dado é valido
const isValid = (...d) => d.every(dado => !isNaN(dado) && dado.trim() != '' && dado != undefined && dado != null)

// valida se um numero esta no limite definido
const isLimit = (min, max, ...n) => n.every(numero => numero >= min && numero <= max)

// limpa o conteudo de um campo
const limparConteudo = (...d) =>d.forEach(dado => dado.value = '')
