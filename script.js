



const botaoEnviar = document.querySelector('.enviar');




const salvaFilme = (nome, imagem, genero, nota) => {
    const listaFilme = []
    
    const obj = {
        nome: nome,
        imagem: imagem,
        genero: genero,
        nota: nota
    }

    listaFilme.push(obj)
    console.log(listaFilme);

}

const render = (nome, imagem, genero, nota) => {
    const container = document.querySelector('.container');

    const listItem = document.createElement('div')

    // precisa fazer com q o genero e nome fiquem em cima da imagem 
    listItem.innerHTML = `
    
    <div class="box">
            <div class="opcoesFilmes">
                <img class="imgEditar" src="botao-editar.png">
                <img class="imgDeletar" src="botao-de-deletar.png">

            </div>
            <p class="titulo-box">${nome}</p>
            <img class="imagemBox" src="${imagem}" >
            <div class="infos">
                <p class="infoGenero">${genero}</p>
                <p class="info">
                <img class="estrelaBox" src="estrela.png" >
                ${nota}/10
                </p>
    
            </div>
    
        </div
    
    `

    container.appendChild(listItem)
}





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

    salvaFilme(nome, imagem, genero, nota)
    render(nome, imagem, genero, nota)

    
} )


