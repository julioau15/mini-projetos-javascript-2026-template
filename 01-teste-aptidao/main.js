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
        // define resultado e cor
        if(Number(tempo.value) < 14){
            resultado = 'Apto'
            cor = '#14532d'
        }else{
            resultado = 'Não Apto'
            cor = '#7f1d1d'
        }

        // chama escrever mensagem
        escreverMensagem(resultado, container, tempo.value, cor)
        limparConteudo(tempo)
        tempo.focus()
    }
}

// escreve uma mensagem em algum container
const escreverMensagem = (mensagem, container, tempo, cor=null) => {
    // limpa o conteudo do container
    container.textContent = ''
    // cria um paragrafo
    let paragrafo = document.createElement('p')
    paragrafo.textContent = `Com o tempo de ${tempo} você está ${mensagem}`

    // caso não seja passado uma cor, ele não modifica
    if(cor != null)
        container.style.border = `1px solid ${cor}`

    // adiciona o pagragrafo no container
    container.appendChild(paragrafo)
}

// verifica se um dado é valido
const isValid = (...d) => d.every(dado => !isNaN(dado) && dado.trim() != '' && dado != undefined && dado != null)

// valida se um numero esta no limite definido
const isLimit = (min, max, ...n) => n.every(numero => numero >= 0 && numero <= 100)

// limpa o conteudo de um campo
const limparConteudo = (...d) =>d.forEach(dado => dado.value = '')
