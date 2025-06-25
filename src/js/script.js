// Classe Heroi representando um personagem genérico de aventura
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
  }

  atacar() {
    let ataque = '';

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
        ataque = 'um ataque desconhecido';
    }

    return `${this.tipo} atacou usando ${ataque}`;
  }
}

const form = document.getElementById('heroForm');
const output = document.getElementById('output');
const heroImage = document.getElementById('heroImage');

// Mapeamento tipo -> URL do GIF
const heroGifs = {
  mago: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDFmcWFzbTloc3Uwb3U5eWIyaGtzamtza2hhanZtc3hlMmxpcDFjOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GzNzzmpnxXbIxkU5jP/200.webp',
  guerreiro: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjdjMXg3cDRtdG9lcjJrcnhxcXBrcHhhaDk0c3g0dmQxdDdhbGZ6ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/c4p59oQhRFE1W/200.webp',
  monge: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmRxODJtaGgwdTV0d203bTB2cnh2cDkxZXEwOWUycnZzYWpiemJncSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7XROoapi1YAWQ/200.webp',
  ninja: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHQ4ZDJjcTc0b3c3a3EyN3BpZWhmbjgwN3lkMXAxdmFjZ2ZxaGdyMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zUO7Qh1Mysk2FXjMPG/200.webp'
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = form.name.value.trim();
  const idade = Number(form.age.value);
  const tipo = form.type.value;

  if (!nome || !idade || !tipo) {
    output.textContent = 'Preencha todos os campos.';
    heroImage.style.display = 'none';
    return;
  }

  const heroi = new Heroi(nome, idade, tipo);
  output.textContent = heroi.atacar();

  // Atualiza imagem do herói
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
