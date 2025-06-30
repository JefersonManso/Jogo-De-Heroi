// Define a classe Heroi com nome, idade e tipo
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método que retorna a mensagem de ataque personalizada
  atacar() {
    switch (this.tipo) {
      case "mago":
        return "O mago atacou usando magia!";
      case "guerreiro":
        return "O guerreiro atacou usando espada!";
      case "monge":
        return "O monge atacou usando artes marciais!";
      case "ninja":
        return "O ninja atacou usando shuriken!";
      default:
        return "Tipo desconhecido.";
    }
  }

  // Método que retorna o GIF correspondente ao tipo de herói
  getGif() {
    switch (this.tipo) {
      case "mago":
        return "https://i.gifer.com/31Kl.gif";
      case "guerreiro":
        return "https://i.gifer.com/Vg7.gif";
      case "monge":
        return "https://i.gifer.com/OxAz.gif";
      case "ninja":
        return "https://i.gifer.com/YAS0.gif";
      default:
        return "";
    }
  }
}

// Função principal executada ao clicar no botão "Atacar"
function jogar() {
  // Captura os valores dos campos do formulário
  const nome = document.getElementById("nome").value;
  const idade = parseInt(document.getElementById("idade").value);
  const tipo = document.getElementById("tipo").value;

  // Seleciona os elementos onde serão exibidos os resultados
  const resultadoEl = document.getElementById("resultado");
  const sprite = document.getElementById("sprite");

  // Validação: nome e idade obrigatórios
  if (!nome || isNaN(idade)) {
    resultadoEl.innerText = "Preencha todos os campos!";
    sprite.src = ""; // Limpa imagem
    return;
  }

  // Cria o herói com os dados informados
  const heroi = new Heroi(nome, idade, tipo);

  // Exibe a mensagem de ataque
  resultadoEl.innerText = heroi.atacar();

  // Exibe o GIF correspondente
  sprite.src = heroi.getGif();
}
