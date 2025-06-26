// Classe Heroi representando um personagem genérico de aventura
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
  }
  // Método que retorna a ação de ataque do herói
  atacar() {
    let ataque = '';

    // Verifica o tipo do herói e define o ataque correspondente
    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'um ataque desconhecido'; // Caso o tipo não esteja entre os esperados
    }

    return `${this.tipo} atacou usando ${ataque}`;   // Retorna a frase com o tipo e o ataque do herói
  }
}

// Captura os elementos do DOM
const form = document.getElementById('heroForm');
const output = document.getElementById('output');
const heroImage = document.getElementById('heroImage');

// Objeto contendo os tipos e seus respectivos GIFs
const heroGifs = {
  mago: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDFmcWFzbTloc3Uwb3U5eWIyaGtzamtza2hhanZtc3hlMmxpcDFjOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GzNzzmpnxXbIxkU5jP/200.webp',
  guerreiro: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjdjMXg3cDRtdG9lcjJrcnhxcXBrcHhhaDk0c3g0dmQxdDdhbGZ6ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/c4p59oQhRFE1W/200.webp',
  monge: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmRxODJtaGgwdTV0d203bTB2cnh2cDkxZXEwOWUycnZzYWpiemJncSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7XROoapi1YAWQ/200.webp',
  ninja: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHQ4ZDJjcTc0b3c3a3EyN3BpZWhmbjgwN3lkMXAxdmFjZ2ZxaGdyMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zUO7Qh1Mysk2FXjMPG/200.webp'
};

// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Impede o recarregamento da página ao enviar o form

  // Captura e trata os valores do formulário

  const nome = form.name.value.trim();
  const idade = Number(form.age.value);
  const tipo = form.type.value;

  // Verifica se todos os campos foram preenchidos
  if (!nome || !idade || !tipo) {
    output.textContent = 'Preencha todos os campos.';
    heroImage.style.display = 'none';
    return;
  }

  // Cria um novo herói com os dados fornecidos
  const heroi = new Heroi(nome, idade, tipo);

   // Exibe a mensagem de ataque do herói
  output.textContent = heroi.atacar(); 

  
  // Atualiza a imagem de acordo com o tipo do herói
  const gifUrl = heroGifs[tipo];
  if (gifUrl) {
    console.log('GIF URL:', gifUrl);

    heroImage.src = gifUrl;
    heroImage.alt = `Herói ${tipo}`;
    heroImage.style.display = 'block';
  } else {
    heroImage.style.display = 'none';
  }
});
