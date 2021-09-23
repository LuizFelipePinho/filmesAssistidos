const filmesAtuaisRenderizados = []

const deleta = (id) => {

    // preciso filtrar a lista de elementos renderizados na tela e devolver todos os elementos diferentes do id passado como parametro e dps mandar renderizar dnv
    
    for(let i = 0; i < filmesAtuaisRenderizados.length; i++) {
        console.log(filmesAtuaisRenderizados[i].id)
        if(filmesAtuaisRenderizados[i].id === id){
            filmesAtuaisRenderizados.slice(i, 1)
            // é pra renderizaaaaaaar
            render(filmesAtuaisRenderizados)

        }


    }
  

}

const identificadoAleatorio =  () => Math.floor(Math.random() * 1000);



const botaoEnviar = document.querySelector('.enviar');




const salvaFilme = (nome, imagem, genero, nota) => {
    const filmeAtual = []
    
    const obj = {
        nome: nome,
        imagem: imagem,
        genero: genero,
        nota: nota,
        id: identificadoAleatorio()
    }


    filmeAtual.push(obj)
    filmesAtuaisRenderizados.push(obj)
    
    render(filmeAtual)


}

const render = (filmeAtual) => {



    const container = document.querySelector('.container');

    const listItem = document.createElement('div')

    // vai iterar pelo elemento da lista e armazenar o elemento dentro
    const elemento = filmeAtual.map( (elemento) => {
        return `
        <div class="box">
                <div class="opcoesFilmes">
                    <img class="imgEditar" src="botao-editar.png">
                    <img class="imgDeletar" src="botao-de-deletar.png" onClick="deleta(${elemento.id})">
    
                </div>
                <p class="titulo-box">${elemento.nome}</p>
                <img class="imagemBox" src="${elemento.imagem}" >
                <div class="infos">
                    <p class="infoGenero">${elemento.genero}</p>
                    <p class="info">
                    <img class="estrelaBox estrelaJS" src="estrela.png" >
                    ${elemento.nota}/10
                    </p>
                </div>
            </div
        `
    })

    // simplesmente injetamos em listItem que é uma div e em seguida injetamos no nó do container
    listItem.innerHTML = `${elemento}`
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

    
} )