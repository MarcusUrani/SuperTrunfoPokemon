const sortButton = document.querySelector(".sort__button");
const playButton = document.querySelector(".play__button");
const resultSection = document.querySelector(".main__result");
const result = document.querySelector(".result");
const machineDiv = document.querySelector("#machine__card__container");
const playerDiv = document.querySelector("#player__card__container");
const playerScoreSection = document.querySelector(".main__score--player");
const machineScoreSection = document.querySelector(".main__score--machine");
let playerScore = 0;
let machineScore = 0;

const card1 = {
  name: "Charmander",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  attributes: {
    Ataque: 7,
    Defesa: 6,
    AtaqueEspecial: 8,
    DefesaEspecial: 5,
  },
};

const card2 = {
  name: "Bulbassauro",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  attributes: {
    Ataque: 6,
    Defesa: 8,
    AtaqueEspecial: 7,
    DefesaEspecial: 7,
  },
};

const card3 = {
  name: "Squirtle",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  attributes: {
    Ataque: 8,
    Defesa: 5,
    AtaqueEspecial: 8,
    DefesaEspecial: 7,
  },
};

const card4 = {
  name: "Charizard",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
  attributes: {
    Ataque: 10,
    Defesa: 7,
    AtaqueEspecial: 9,
    DefesaEspecial: 5,
  },
};

const card5 = {
  name: "Venussaur",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
  attributes: {
    Ataque: 6,
    Defesa: 9,
    AtaqueEspecial: 7,
    DefesaEspecial: 8,
  },
};

const card6 = {
  name: "Blastoise",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
  attributes: {
    Ataque: 8,
    Defesa: 7,
    AtaqueEspecial: 5,
    DefesaEspecial: 10,
  },
};

const card7 = {
  name: "Pikachu",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  attributes: {
    Ataque: 8,
    Defesa: 5,
    AtaqueEspecial: 9,
    DefesaEspecial: 6,
  },
};

const card8 = {
  name: "Ninetales",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
  attributes: {
    Ataque: 9,
    Defesa: 4,
    AtaqueEspecial: 8,
    DefesaEspecial: 5,
  },
};

const card9 = {
  name: "Arcanine",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png",
  attributes: {
    Ataque: 8,
    Defesa: 6,
    AtaqueEspecial: 6,
    DefesaEspecial: 7,
  },
};

const card10 = {
  name: "Cloyster",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png",
  attributes: {
    Ataque: 6,
    Defesa: 8,
    AtaqueEspecial: 5,
    DefesaEspecial: 10,
  },
};

const card11 = {
  name: "Gengar",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
  attributes: {
    Ataque: 8,
    Defesa: 3,
    AtaqueEspecial: 9,
    DefesaEspecial: 5,
  },
};

const card12 = {
  name: "Gyarados",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
  attributes: {
    Ataque: 9,
    Defesa: 5,
    AtaqueEspecial: 8,
    DefesaEspecial: 6,
  },
};

const card13 = {
  name: "Eevee",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
  attributes: {
    Ataque: 6,
    Defesa: 7,
    AtaqueEspecial: 5,
    DefesaEspecial: 8,
  },
};

const card14 = {
  name: "Articuno",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png",
  attributes: {
    Ataque: 9,
    Defesa: 4,
    AtaqueEspecial: 10,
    DefesaEspecial: 6,
  },
};

const card15 = {
  name: "Moltres",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png",
  attributes: {
    Ataque: 7,
    Defesa: 8,
    AtaqueEspecial: 6,
    DefesaEspecial: 7,
  },
};

const card16 = {
  name: "Zapdos",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png",
  attributes: {
    Ataque: 10,
    Defesa: 4,
    AtaqueEspecial: 8,
    DefesaEspecial: 6,
  },
};

const card17 = {
  name: "Dragonite",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
  attributes: {
    Ataque: 8,
    Defesa: 7,
    AtaqueEspecial: 9,
    DefesaEspecial: 6,
  },
};

const card18 = {
  name: "Mewtwo",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
  attributes: {
    Ataque: 9,
    Defesa: 6,
    AtaqueEspecial: 10,
    DefesaEspecial: 5,
  },
};

const card19 = {
  name: "Mew",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
  attributes: {
    Ataque: 8,
    Defesa: 7,
    AtaqueEspecial: 9,
    DefesaEspecial: 6,
  },
};

const card20 = {
  name: "Chikorita",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png",
  attributes: {
    Ataque: 7,
    Defesa: 8,
    AtaqueEspecial: 6,
    DefesaEspecial: 4,
  },
};

const card21 = {
  name: "Meganium",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/154.png",
  attributes: {
    Ataque: 9,
    Defesa: 4,
    AtaqueEspecial: 8,
    DefesaEspecial: 6,
  },
};

const card22 = {
  name: "Cyndaquil",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png",
  attributes: {
    Ataque: 7,
    Defesa: 5,
    AtaqueEspecial: 6,
    DefesaEspecial: 3,
  },
};

const card23 = {
  name: "Typhlosion",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/157.png",
  attributes: {
    Ataque: 9,
    Defesa: 5,
    AtaqueEspecial: 8,
    DefesaEspecial: 4,
  },
};

const card24 = {
  name: "Totodile",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png",
  attributes: {
    Ataque: 5,
    Defesa: 7,
    AtaqueEspecial: 6,
    DefesaEspecial: 8,
  },
};

const card25 = {
  name: "Feraligatr",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/160.png",
  attributes: {
    Ataque: 9,
    Defesa: 5,
    AtaqueEspecial: 8,
    DefesaEspecial: 6,
  },
};

const card26 = {
  name: "Raikou",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/243.png",
  attributes: {
    Ataque: 8,
    Defesa: 6,
    AtaqueEspecial: 5,
    DefesaEspecial: 8,
  },
};

const card27 = {
  name: "Entei",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png",
  attributes: {
    Ataque: 9,
    Defesa: 4,
    AtaqueEspecial: 10,
    DefesaEspecial: 5,
  },
};

const card28 = {
  name: "Suicune",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/245.png",
  attributes: {
    Ataque: 6,
    Defesa: 8,
    AtaqueEspecial: 5,
    DefesaEspecial: 9,
  },
};

const card29 = {
  name: "Tyranitar",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/248.png",
  attributes: {
    Ataque: 10,
    Defesa: 8,
    AtaqueEspecial: 5,
    DefesaEspecial: 9,
  },
};

const card30 = {
  name: "Lugia",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png",
  attributes: {
    Ataque: 9,
    Defesa: 5,
    AtaqueEspecial: 10,
    DefesaEspecial: 4,
  },
};

const card31 = {
  name: "Ho-Oh",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/250.png",
  attributes: {
    Ataque: 7,
    Defesa: 8,
    AtaqueEspecial: 6,
    DefesaEspecial: 10,
  },
};

const card32 = {
  name: "Celebi",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/251.png",
  attributes: {
    Ataque: 9,
    Defesa: 5,
    AtaqueEspecial: 8,
    DefesaEspecial: 3,
  },
};

const card33 = {
  name: "Treecko",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png",
  attributes: {
    Ataque: 6,
    Defesa: 7,
    AtaqueEspecial: 4,
    DefesaEspecial: 8,
  },
};

const card34 = {
  name: "Sceptile",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/254.png",
  attributes: {
    Ataque: 9,
    Defesa: 5,
    AtaqueEspecial: 8,
    DefesaEspecial: 3,
  },
};

const card35 = {
  name: "Torchic",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png",
  attributes: {
    Ataque: 7,
    Defesa: 4,
    AtaqueEspecial: 8,
    DefesaEspecial: 5,
  },
};

const card36 = {
  name: "Blaziken",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/257.png",
  attributes: {
    Ataque: 8,
    Defesa: 7,
    AtaqueEspecial: 10,
    DefesaEspecial: 5,
  },
};

const card37 = {
  name: "Mudkip",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png",
  attributes: {
    Ataque: 6,
    Defesa: 7,
    AtaqueEspecial: 5,
    DefesaEspecial: 9,
  },
};

const card38 = {
  name: "Swampert",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/260.png",
  attributes: {
    Ataque: 9,
    Defesa: 7,
    AtaqueEspecial: 5,
    DefesaEspecial: 6,
  },
};

const card39 = {
  name: "Shiftry",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/275.png",
  attributes: {
    Ataque: 7,
    Defesa: 8,
    AtaqueEspecial: 9,
    DefesaEspecial: 5,
  },
};

const card40 = {
  name: "Gardevoir",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png",
  attributes: {
    Ataque: 5,
    Defesa: 6,
    AtaqueEspecial: 10,
    DefesaEspecial: 8,
  },
};

const card41 = {
  name: "Aggron",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/306.png",
  attributes: {
    Ataque: 9,
    Defesa: 8,
    AtaqueEspecial: 5,
    DefesaEspecial: 4,
  },
};

const card42 = {
  name: "Flygon",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/330.png",
  attributes: {
    Ataque: 7,
    Defesa: 6,
    AtaqueEspecial: 8,
    DefesaEspecial: 5,
  },
};

const card43 = {
  name: "Zangoose",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/335.png",
  attributes: {
    Ataque: 8,
    Defesa: 7,
    AtaqueEspecial: 4,
    DefesaEspecial: 4,
  },
};

const card44 = {
  name: "Salamence",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/373.png",
  attributes: {
    Ataque: 10,
    Defesa: 8,
    AtaqueEspecial: 4,
    DefesaEspecial: 5,
  },
};

const card45 = {
  name: "Metagross",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/376.png",
  attributes: {
    Ataque: 9,
    Defesa: 10,
    AtaqueEspecial: 7,
    DefesaEspecial: 5,
  },
};

const card46 = {
  name: "Regirock",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/377.png",
  attributes: {
    Ataque: 7,
    Defesa: 10,
    AtaqueEspecial: 6,
    DefesaEspecial: 8,
  },
};

const card47 = {
  name: "Regice",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/378.png",
  attributes: {
    Ataque: 5,
    Defesa: 10,
    AtaqueEspecial: 6,
    DefesaEspecial: 9,
  },
};

const card48 = {
  name: "Registeel",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/379.png",
  attributes: {
    Ataque: 7,
    Defesa: 10,
    AtaqueEspecial: 4,
    DefesaEspecial: 9,
  },
};

const card49 = {
  name: "Latias",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/380.png",
  attributes: {
    Ataque: 5,
    Defesa: 6,
    AtaqueEspecial: 10,
    DefesaEspecial: 7,
  },
};

const card50 = {
  name: "Latios",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/381.png",
  attributes: {
    Ataque: 7,
    Defesa: 5,
    AtaqueEspecial: 9,
    DefesaEspecial: 6,
  },
};

const card51 = {
  name: "Kyogre",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/382.png",
  attributes: {
    Ataque: 9,
    Defesa: 5,
    AtaqueEspecial: 7,
    DefesaEspecial: 8,
  },
};

const card52 = {
  name: "Groudon",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/383.png",
  attributes: {
    Ataque: 9,
    Defesa: 7,
    AtaqueEspecial: 5,
    DefesaEspecial: 9,
  },
};

const card53 = {
  name: "Rayquaza",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png",
  attributes: {
    Ataque: 9,
    Defesa: 4,
    AtaqueEspecial: 10,
    DefesaEspecial: 6,
  },
};

const card54 = {
  name: "Jirachi",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/385.png",
  attributes: {
    Ataque: 5,
    Defesa: 4,
    AtaqueEspecial: 9,
    DefesaEspecial: 6,
  },
};

const card55 = {
  name: "Deoxys",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/386.png",
  attributes: {
    Ataque: 10,
    Defesa: 7,
    AtaqueEspecial: 8,
    DefesaEspecial: 5,
  },
};

const cards = [
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
  card16,
  card17,
  card18,
  card19,
  card20,
  card21,
  card22,
  card23,
  card24,
  card25,
  card26,
  card27,
  card28,
  card29,
  card30,
  card31,
  card32,
  card33,
  card34,
  card35,
  card36,
  card37,
  card38,
  card39,
  card40,
  card41,
  card42,
  card43,
  card44,
  card45,
  card46,
  card47,
  card48,
  card49,
  card50,
  card51,
  card52,
  card53,
  card54,
  card55,
];

let computerCard;
let playerCard;

sortButton.addEventListener("click", function () {
  let playerCardNumber = parseInt(Math.random() * cards.length);
  playerCard = cards[playerCardNumber];
  cards.splice[playerCardNumber];

  let computerCardNumber = parseInt(Math.random() * cards.length);
  computerCard = cards[computerCardNumber];

  sortButton.disabled = true;
  playButton.disabled = false;
  result.innerHTML = "";
  createCardHtml(playerCard, "player", "input", playerDiv);
  clearComputerCard();
});

const getSelectedAttribute = () => {
  const radioAttributes = document.getElementsByName("attribute");

  for (let i = 0; i < radioAttributes.length; i++) {
    if (radioAttributes[i].checked) {
      return radioAttributes[i].value;
    }
  }
};

playButton.addEventListener("click", function () {
  const selectedAttribute = getSelectedAttribute();
  if (selectedAttribute != undefined) {
    const playerAttribute = playerCard.attributes[selectedAttribute];
    const computerAttribute = computerCard.attributes[selectedAttribute];

    if (playerAttribute > computerAttribute) {
      playerScore++;
      window.scrollTo(0, 0);
      resultSection.classList.remove("disabled");
      playerScoreSection.innerHTML = playerScore;
      result.innerHTML = `Parabéns, você venceu! O placar agora é de: ${playerScore} x ${machineScore}`;
    } else if (computerAttribute > playerAttribute) {
      machineScore++;
      window.scrollTo(0, 0);
      resultSection.classList.remove("disabled");
      machineScoreSection.innerHTML = machineScore;
      result.innerHTML = `Infelizmente você perdeu, o atributo ${selectedAttribute} do adversário era ${computerAttribute}. O placar agora é de: ${playerScore} x ${machineScore}`;
    } else {
      window.scrollTo(0, 0);
      resultSection.classList.remove("disabled");
      result.innerHTML = `Deu empate! O atributo ${selectedAttribute} do adversário era ${computerAttribute}. O placar continua em: ${playerScore} x ${machineScore}`;
    }
    sortButton.disabled = false;
    playButton.disabled = true;
    createCardHtml(
      computerCard,
      "machine",
      "p",
      machineDiv,
      "machine__attribute"
    );
  } else {
    resultSection.classList.remove("disabled");
    result.innerHTML = "Selecione um atributo para jogar!";
  }
});

const createCardHtml = (card, player, tag, playerCardDiv, className) => {
  playerCardDiv.classList.remove("disabled");
  let cardDiv = document.getElementById(`${player}__card`);
  cardDiv.style.backgroundImage = `url(${card.image})`;

  const imageSection =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png">';
  const optionsSection = `<section id = "options" class = "card__status ${player}__status">`;

  let textOptions = "";

  for (let attribute in card.attributes) {
    textOptions += `<${tag} class = "${className}" type = "radio" name = "attribute" value = "${attribute}">${attribute}: ${card.attributes[attribute]}</${tag}><br>`;
  }
  const name = `<p class = "card__subtitle">${card.name} </p>`;
  cardDiv.innerHTML =
    imageSection + name + optionsSection + textOptions + "</section>";
};

const clearComputerCard = () => {
  machineDiv.classList.add("disabled");
  const computerCardDiv = document.getElementById("machine__card");
  computerCardDiv.style.backgroundImage = "";
  computerCardDiv.innerHTML = "";
};

const closeModal = () => {
  resultSection.classList.add("disabled");
};
