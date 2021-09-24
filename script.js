let filmesAtuaisRenderizados = [];

const identificadoAleatorio = () => Math.floor(Math.random() * 1000);

const botaoEnviar = document.querySelector(".enviar");

const salvaFilme = (nome, imagem, genero, nota) => {
  const filmeAtual = [];

  const obj = {
    nome: nome,
    imagem: imagem,
    genero: genero,
    nota: nota,
    id: identificadoAleatorio(),
    deletar: false,
  };

  filmeAtual.push(obj);

  filmesAtuaisRenderizados.push(obj);

  // valida se houver algum item renderizado, se tiver ele vai renderizar somente o filme adicionado e se nao renderiza tudo q tiver na lista
  // joga pra dentro do render
  if (filmesAtuaisRenderizados.length > 0) {
    render(filmeAtual);
  } else {
    render(filmesAtuaisRenderizados);
  }
};

const render = (filmeAtual) => {
  const container = document.querySelector(".container");

  // vai iterar pelo elemento da lista e armazenar o elemento dentro
  const elemento = filmeAtual.map((elemento) => {
    container.insertAdjacentHTML(
      "beforeend",
      `
        <div class="box" data-key="${elemento.id}">
                <div class="opcoesFilmes">
                    <img class="imgEditar" src="botao-editar.png">
                    <img class="imgDeletar" src="botao-de-deletar.png" onClick="deletar(${elemento.id})">
    
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
    );
  });
};

const deletar = (id) => {
  // vamos fazer uma logica que tire o elemento a partir do id recebido da lista de filmesAtuaisRenderizados
  const indiceElemento = () => {
    for (let i = 0; i < filmesAtuaisRenderizados.length; i++) {
      if (filmesAtuaisRenderizados[i].id == id) {
        return i;
      }
    }
  };

  const indice = indiceElemento();

  filmesAtuaisRenderizados[indice].deletar = true;

  const elementoExist = document.querySelector(`[data-key='${id}']`);
  console.log(elementoExist);

  filmesAtuaisRenderizados.splice(indice, 1);
  console.log(filmesAtuaisRenderizados);

  elementoExist.remove();
};

botaoEnviar.addEventListener("click", (evento) => {
  evento.preventDefault();

  const campoNome = document.querySelector("#nome");
  const nome = campoNome.value;

  const campoImagem = document.querySelector("#imagem");
  const imagem = campoImagem.value;

  const campoGenero = document.querySelector("#genero");
  const genero = campoGenero.value;

  const campoNota = document.querySelector("#nota");
  const nota = campoNota.value;

  salvaFilme(nome, imagem, genero, nota);
});
