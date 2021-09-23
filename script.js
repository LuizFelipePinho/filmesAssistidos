
const botaoEnviar = document.querySelector('.enviar');

botaoEnviar.addEventListener("click", (evento) => {
    evento.preventDefault();

    const campoNome = document.querySelector('#nome')
    const nome = campoNome.value

    const campoImagem = document.querySelector('#imagem')
    const imagem = campoImagem.value

    const campoGenero = document.querySelector('#genero')
    const genero = campoGenero.value

    const campoNota = document.querySelector('#nota');
    const nota = campoNota.value

    const container = document.querySelector('.container');

    const listItem = document.createElement('div')

    // precisa fazer com q o genero e nome fiquem em cima da imagem 
    listItem.innerHTML = `
        <div class="box"> 
            <div class="box-imagem"> <img src="${imagem}" > </div>
            <p>${nome}</p>
        </div
    `

    container.appendChild(listItem)
} )