// Todos os projetos dentro de uma lista
 const projetos = [
  {
    icone: "🩺",
    titulo: "Agenda da Clínica",
    cliente: "Cliente: Dra. Helena Duarte",
    resumo: "Página para pacientes consultarem horários disponíveis.",
    detalhes: "A Dra. Helena queria uma página simples para mostrar os dias e horários de atendimento. Criamos uma tabela responsiva e um botão que mostra ou esconde os horários de cada dia.",
    tecnologias: "HTML, CSS, JavaScript"
  },
  {
    icone: "🧁",
    titulo: "Loja de Doces",
    cliente: "Cliente: Beatriz Moraes",
    resumo: "Catálogo online de doces com carrinho de compras simples.",
    detalhes: "A Beatriz vende doces caseiros e precisava de um catálogo bonito. Cada doce tem foto, preço e um botão para adicionar ao carrinho. O total é calculado com JavaScript.",
    tecnologias: "HTML, CSS, Bootstrap, JavaScript"
  },
  {
    icone: "💰",
    titulo: "Controle de Gastos",
    cliente: "Cliente: Rafael Tavares",
    resumo: "Ferramenta para anotar despesas e ver o total do mês.",
    detalhes: "O Rafael queria controlar suas despesas. O usuário digita o nome e o valor do gasto, e a página soma tudo automaticamente. Usamos variáveis, funções e manipulação do DOM.",
    tecnologias: "HTML, CSS, JavaScript"
  },
  {
    icone: "🌎",
    titulo: "Quiz de Geografia",
    cliente: "Cliente: Prof. Marcos Albuquerque",
    resumo: "Jogo de perguntas e respostas para alunos do ensino médio.",
    detalhes: "O professor Marcos pediu um quiz para usar em sala de aula. O jogo mostra uma pergunta por vez, confere a resposta com if/else e exibe a pontuação no final.",
    tecnologias: "HTML, CSS, JavaScript"
  },
  {
    icone: "🍝",
    titulo: "Cardápio Digital",
    cliente: "Cliente: Lúcia Ferraz",
    resumo: "Cardápio para um restaurante, com filtro por tipo de prato.",
    detalhes: "O restaurante da Dona Lúcia queria trocar o cardápio de papel por um digital. Criamos botões de filtro (entradas, pratos e sobremesas) que mostram apenas os itens escolhidos.",
    tecnologias: "HTML, CSS, Bootstrap, JavaScript"
  },
  {
    icone: "📝",
    titulo: "Lista de Tarefas",
    cliente: "Cliente: Camila Rocha",
    resumo: "App para organizar as tarefas da faculdade.",
    detalhes: "A Camila precisava organizar trabalhos e provas. Ela escreve a tarefa, clica em adicionar e pode marcar como concluída ou apagar. Foi nosso primeiro projeto usando eventos.",
    tecnologias: "HTML, CSS, JavaScript"
  },
  {
    icone: "💪",
    titulo: "Calculadora de IMC",
    cliente: "Cliente: Thiago Nunes",
    resumo: "Calcula o IMC e mostra a classificação do resultado.",
    detalhes: "O Thiago é personal trainer e queria uma calculadora para seus alunos. O usuário digita peso e altura, e a página mostra o IMC e a faixa em que a pessoa se encontra.",
    tecnologias: "HTML, CSS, Bootstrap, JavaScript"
  }
];

let posicao = 0;

// Responsavel por assimilar cada var a um id que foi colocado la no html
const cartao = document.getElementById("cartao-projeto");
const icone = document.getElementById("projeto-icone");
const cliente = document.getElementById("projeto-cliente");
const titulo = document.getElementById("projeto-titulo");
const resumo = document.getElementById("projeto-resumo");
const contador = document.getElementById("contador");

const botaoAnterior = document.getElementById("btn-anterior");
const botaoProximo = document.getElementById("btn-proximo");
const botaoDetalhes = document.getElementById("btn-detalhes");

const janela = document.getElementById("janela");
const janelaTitulo = document.getElementById("janela-titulo");
const janelaCliente = document.getElementById("janela-cliente");
const janelaTexto = document.getElementById("janela-texto");
const janelaTecnologias = document.getElementById("janela-tecnologias");
const botaoFechar = document.getElementById("btn-fechar");

//Parte de assimilação dos dados do formulario de acordo com id do html
const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoMensagem = document.getElementById("mensagem");
const resposta = document.getElementById("resposta");

//Função que mostra os projetos em determinada posicao
function mostrarProjeto() {
  const projeto = projetos[posicao];

  icone.textContent = projeto.icone;
  cliente.textContent = projeto.cliente;
  titulo.textContent = projeto.titulo;
  resumo.textContent = projeto.resumo;
  contador.textContent = (posicao + 1) + " de " + projetos.length;
}

//Muda o carousel
function trocarProjeto() {
  cartao.classList.add("sumindo");

  setTimeout(function () {
    mostrarProjeto();
    cartao.classList.remove("sumindo");
  }, 170);
}

//Event de click no botão de proximo
botaoProximo.addEventListener("click", function () {
  posicao = posicao + 1;

  // pra voltqr pro inicio caso tenha finalizado
  if (posicao >= projetos.length) {
    posicao = 0;
  }

  trocarProjeto();
});

botaoAnterior.addEventListener("click", function () {
  posicao = posicao - 1;

  // vice e versa do outro
  if (posicao < 0) {
    posicao = projetos.length - 1;
  }

  trocarProjeto();
});

//Mostra os projetos assim que a tela carregar pela primeira vez (nao tem cache)
mostrarProjeto();

//Event de abrir o modal
botaoDetalhes.addEventListener("click", function () {
  const projeto = projetos[posicao];

  janelaTitulo.textContent = projeto.titulo;
  janelaCliente.textContent = projeto.cliente;
  janelaTexto.textContent = projeto.detalhes;
  janelaTecnologias.textContent = projeto.tecnologias;

  janela.classList.add("aberta");
});

//Event de fechar o modal
botaoFechar.addEventListener("click", function () {
  janela.classList.remove("aberta");
});

//Checagem se o campo está vazio
function campoVazio(campo) {
  if (campo.value === "") {
    campo.classList.add("is-invalid");
    return true;
  } else {
    campo.classList.remove("is-invalid");
    return false;
  }
}

//Função de enviar formulário
//Ele faz as checagens para cada campo do form
function emailValido(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

formulario.addEventListener("submit", function (evento) {

  evento.preventDefault();

  const nomeVazio = campoVazio(campoNome);
  const emailVazio = campoVazio(campoEmail);
  const mensagemVazia = campoVazio(campoMensagem);

  resposta.classList.remove("d-none", "alert-danger", "alert-success");

  if (nomeVazio || emailVazio || mensagemVazia) {
    resposta.textContent = "Preencha todos os campos antes de enviar.";
    resposta.classList.add("alert-danger");
  } else if (!emailValido(campoEmail.value.trim())) {
    resposta.textContent = "Digite um e-mail válido.";
    resposta.classList.add("alert-danger");
  } else if (campoMensagem.value.trim().length < 8) {
    resposta.textContent = "A mensagem deve ter pelo menos 8 caracteres.";
    resposta.classList.add("alert-danger");
  } else {
    resposta.textContent = "Mensagem enviada com sucesso! Obrigado, " + campoNome.value + ".";
    resposta.classList.add("alert-success");
    formulario.reset();
  }
});
