// Desafio DIO: Classificador de nível de Herói
// Conceitos usados: variáveis, operadores, laços de repetição e estruturas de decisão

// Lista de heróis (nome + quantidade de XP)
const herois = [
  { nome: "Aragorn", xp: 500 },
  { nome: "Legolas", xp: 1500 },
  { nome: "Gandalf", xp: 3200 },
  { nome: "Frodo", xp: 5500 },
  { nome: "Gimli", xp: 7500 },
  { nome: "Boromir", xp: 8500 },
  { nome: "Galadriel", xp: 9500 },
  { nome: "Sauron", xp: 12000 },
];

// Função que classifica o nível a partir do XP
function classificarNivel(xp) {
  let nivel;

  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  return nivel;
}

// Laço de repetição: percorre todos os heróis e exibe a mensagem final
for (let i = 0; i < herois.length; i++) {
  const nome = herois[i].nome;
  const xp = herois[i].xp;
  const nivel = classificarNivel(xp);

  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}