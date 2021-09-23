const filmesAtuaisRenderizados = []

const deleta = (id) => {

    // preciso filtrar a lista de elementos renderizados na tela e devolver todos os elementos diferentes do id passado como parametro e dps mandar renderizar dnv
    
   
    // console.log(filmesAtuaisRenderizados)

}

// const limpaLista = () => {
//     const novaLista = 
// }

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
    // render(filmeAtual)
    
    // valida se houver algum item renderizado, se tiver ele vai renderizar somente o filme adicionado e se nao renderiza tudo q tiver na lista
    if(filmesAtuaisRenderizados.length > 0) {
        render(filmeAtual)
    } else {
        render(filmesAtuaisRenderizados)

    }



}

const render = (filmeAtual) => {

    const container = document.querySelector('.container');

    // preciso criar uma validação onde se houver algo na tela(na lista) devo apagar tudo e dps rederizar




    // vai iterar pelo elemento da lista e armazenar o elemento dentro
    const elemento = filmeAtual.map( (elemento) => {
        console.log(elemento);
        container.insertAdjacentHTML('beforeend', `
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
        )})


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