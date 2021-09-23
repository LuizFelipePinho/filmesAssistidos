

const deleta = (id) => {
    alert('deletando')
}


const botaoEnviar = document.querySelector('.enviar');




const salvaFilme = (nome, imagem, genero, nota) => {
    const listaFilme = []
    
    const obj = {
        nome: nome,
        imagem: imagem,
        genero: genero,
        nota: nota,
        id: listaFilme.length + 1
    }

    listaFilme.push(obj)
    render(listaFilme)


}

const render = (listaFilme) => {

    const container = document.querySelector('.container');

    const listItem = document.createElement('div')

    // vai iterar por cada elemento da lista e armazenar o elemento dentro
    const elemento = listaFilme.map( (elemento) => {
        return `
        <div class="box">
                <div class="opcoesFilmes">
                    <img class="imgEditar" src="botao-editar.png">
                    <img class="imgDeletar" src="botao-de-deletar.png" onClick="deleta()">
    
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




   

    // precisa fazer com q o genero e nome fiquem em cima da imagem 
    // listItem.innerHTML = `
    
    // <div class="box">
    //         <div class="opcoesFilmes">
    //             <img class="imgEditar" src="botao-editar.png">
    //             <img class="imgDeletar" src="botao-de-deletar.png" onClick="deleta()">

    //         </div>
    //         <p class="titulo-box">${nome}</p>
    //         <img class="imagemBox" src="${imagem}" >
    //         <div class="infos">
    //             <p class="infoGenero">${genero}</p>
    //             <p class="info">
    //             <img class="estrelaBox estrelaJS" src="estrela.png" >
    //             ${nota}/10
    //             </p>
    
    //         </div>
    
    //     </div
    
    // `

    // container.appendChild(listItem)
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


