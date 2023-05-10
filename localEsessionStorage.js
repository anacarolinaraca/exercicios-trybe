const corDeFundo = document.querySelector('.content');
const corDaFonteBotao = document.querySelectorAll('#font-color>button');
const tamanhoFonte = document.querySelectorAll('#font-size>button');
const espacamentoLinha = document.querySelectorAll('#line-height>button');
const tipoDeFonte = document.querySelectorAll('#font-family>button');
const paragrafo = document.querySelectorAll('.paragraph');
const backgroundColorBotao = document.querySelectorAll('#background-color>button');

window.onload = () => {
    const adicionarBackground = (color) => {
        corDeFundo.style.backgroundColor = color;
        localStorage.setItem('backgroundColor', color);
    }
    const adicionarCorFonte = (color) => {
        for (let i = 0; i < paragrafo.length; i += 1) {
            paragrafo[i].style.color = color;
        }
        localStorage.setItem('fontColor', color);
    }
    const adicionarTamanhoFonte = (size) => {
        for (let i = 0; i < paragrafo.length; i += 1) {
            paragrafo[i].style.fontSize = size;
        }
        localStorage.setItem('fontSize', size);
    }
    const adicionarEspacamento = (height) => {
        for (let i = 0; i < paragrafo.length; i += 1) {
            paragrafo[i].style.lineHeight = height;
        }
        localStorage.setItem('lineHeight', height);
    }
    const adicionarTipoFonte = (family) => {
        for (let i = 0; i < paragrafo.length; i += 1) {
            paragrafo[i].style.fontFamily = family;
        }
        localStorage.setItem('fontFamily', family);
    }
    
    for (let i = 0; i < backgroundColorBotao.length; i += 1) {
        backgroundColorBotao[i].addEventListener('click', (event) => {
            adicionarBackground(event.target.innerHTML);
        }); 
    }
    for (let i = 0; i < corDaFonteBotao.length; i += 1) {
        corDaFonteBotao[i].addEventListener('click', (event) => {
            adicionarCorFonte(event.target.innerHTML);
        }); 
    }
    for (let i = 0; i < tamanhoFonte.length; i += 1) {
        tamanhoFonte[i].addEventListener('click', (event) => {
            adicionarTamanhoFonte(event.target.innerHTML);
        }); 
    }
    for (let i = 0; i < espacamentoLinha.length; i += 1) {
        espacamentoLinha[i].addEventListener('click', (event) => {
            adicionarEspacamento(event.target.innerHTML);
        }); 
    }
    for (let i = 0; i < tipoDeFonte.length; i += 1) {
        tipoDeFonte[i].addEventListener('click', (event) => {
            adicionarTipoFonte(event.target.innerHTML);
        });
    }
    const adicionar = () => {
        let backgroundColor = localStorage.getItem('backgroundColor')
        if (backgroundColor) adicionarBackground(backgroundColor);
        let fontColor = localStorage.getItem('fontColor');
        if (fontColor) adicionarCorFonte(fontColor);
        let fontSize = localStorage.getItem('fontSize');
        if (fontSize) adicionarTamanhoFonte(fontSize);
        let lineHeight = localStorage.getItem('lineHeight');
        if (lineHeight) adicionarEspacamento(lineHeight);
        let fontFamily = localStorage.getItem('fontFamily');
        if (fontFamily) adicionarTipoFonte(fontFamily);
    }
    adicionar();
}
