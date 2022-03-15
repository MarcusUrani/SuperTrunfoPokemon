const sortButton = document.querySelector(".sort__button");
const playButton = document.querySelector(".play__button");
const result = document.querySelector(".result");
const machineDiv = document.querySelector("#machine__card__container");
const playerDiv = document.querySelector("#player__card__container");

var card1 = {
  name: "Charmander",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  attributes: {
    Ataque: 7,
    Defesa: 6,
    AtaqueEspecial: 8,
    DefesaEspecial: 5,
  },
};

var card2 = {
  name: "Bulbassauro",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  attributes: {
    Ataque: 6,
    Defesa: 8,
    AtaqueEspecial: 7,
    DefesaEspecial: 7,
  },
};

var card3 = {
  name: "Squirtle",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  attributes: {
    Ataque: 8,
    Defesa: 5,
    AtaqueEspecial: 8,
    DefesaEspecial: 7,
  },
};

var card4 = {
  name: "Charizard",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
  attributes: {
    Ataque: 10,
    Defesa: 7,
    AtaqueEspecial: 9,
    DefesaEspecial: 5,
  },
};

var card5 = {
  name: "Venussaur",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
  attributes: {
    Ataque: 6,
    Defesa: 9,
    AtaqueEspecial: 7,
    DefesaEspecial: 8,
  },
};

var card6 = {
  name: "Blastoise",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
  attributes: {
    Ataque: 8,
    Defesa: 7,
    AtaqueEspecial: 5,
    DefesaEspecial: 10,
  },
};

var card7 = {
  name: "Pikachu",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  attributes: {
    Ataque: 8,
    Defesa: 5,
    AtaqueEspecial: 9,
    DefesaEspecial: 6,
  },
};

var card8 = {
  name: "Ninetales",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
  attributes: {
    Ataque: 9,
    Defesa: 4,
    AtaqueEspecial: 8,
    DefesaEspecial: 5,
  },
};

var card9 = {
  name: "Arcanine",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png",
  attributes: {
    Ataque: 8,
    Defesa: 6,
    AtaqueEspecial: 6,
    DefesaEspecial: 7,
  },
};

var card10 = {
  name: "Cloyster",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png",
  attributes: {
    Ataque: 6,
    Defesa: 8,
    AtaqueEspecial: 5,
    DefesaEspecial: 10,
  },
};

var card11 = {
  name: "Gengar",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
  attributes: {
    Ataque: 8,
    Defesa: 3,
    AtaqueEspecial: 9,
    DefesaEspecial: 5,
  },
};

var card12 = {
  name: "Gyarados",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
  attributes: {
    Ataque: 9,
    Defesa: 5,
    AtaqueEspecial: 8,
    DefesaEspecial: 6,
  },
};

var card13 = {
  name: "Eevee",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
  attributes: {
    Ataque: 6,
    Defesa: 7,
    AtaqueEspecial: 5,
    DefesaEspecial: 8,
  },
};

var card14 = {
  name: "Articuno",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png",
  attributes: {
    Ataque: 9,
    Defesa: 4,
    AtaqueEspecial: 10,
    DefesaEspecial: 6,
  },
};

var card15 = {
  name: "Moltres",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png",
  attributes: {
    Ataque: 7,
    Defesa: 8,
    AtaqueEspecial: 6,
    DefesaEspecial: 7,
  },
};

var card16 = {
  name: "Zapdos",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png",
  attributes: {
    Ataque: 10,
    Defesa: 4,
    AtaqueEspecial: 8,
    DefesaEspecial: 6,
  },
};

var card17 = {
  name: "Dragonite",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
  attributes: {
    Ataque: 8,
    Defesa: 7,
    AtaqueEspecial: 9,
    DefesaEspecial: 6,
  },
};

var card18 = {
  name: "Mewtwo",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
  attributes: {
    Ataque: 9,
    Defesa: 6,
    AtaqueEspecial: 10,
    DefesaEspecial: 5,
  },
};

var card19 = {
  name: "Mew",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
  attributes: {
    Ataque: 8,
    Defesa: 7,
    AtaqueEspecial: 9,
    DefesaEspecial: 6,
  },
};

var card20 = {
  name: "Chikorita",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png",
  attributes: {
    Ataque: 7,
    Defesa: 8,
    AtaqueEspecial: 6,
    DefesaEspecial: 4,
  },
};

var card21 = {
  name: "Meganium",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/154.png",
  attributes: {
    Ataque: 9,
    Defesa: 4,
    AtaqueEspecial: 8,
    DefesaEspecial: 6,
  },
};

var card22 = {
  name: "Cyndaquil",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png",
  attributes: {
    Ataque: 7,
    Defesa: 5,
    AtaqueEspecial: 6,
    DefesaEspecial: 3,
  },
};

var card23 = {
  name: "Typhlosion",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/157.png",
  attributes: {
    Ataque: 9,
    Defesa: 5,
    AtaqueEspecial: 8,
    DefesaEspecial: 4,
  },
};

var card24 = {
  name: "Totodile",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png",
  attributes: {
    Ataque: 5,
    Defesa: 7,
    AtaqueEspecial: 6,
    DefesaEspecial: 8,
  },
};

var card25 = {
  name: "Feraligatr",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/160.png",
  attributes: {
    Ataque: 9,
    Defesa: 5,
    AtaqueEspecial: 8,
    DefesaEspecial: 6,
  },
};

var card26 = {
  name: "Raikou",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/243.png",
  attributes: {
    Ataque: 8,
    Defesa: 6,
    AtaqueEspecial: 5,
    DefesaEspecial: 8,
  },
};

var card27 = {
  name: "Entei",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png",
  attributes: {
    Ataque: 9,
    Defesa: 4,
    AtaqueEspecial: 10,
    DefesaEspecial: 5,
  },
};

var card28 = {
  name: "Suicune",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/245.png",
  attributes: {
    Ataque: 6,
    Defesa: 8,
    AtaqueEspecial: 5,
    DefesaEspecial: 9,
  },
};

var card29 = {
  name: "Tyranitar",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/248.png",
  attributes: {
    Ataque: 10,
    Defesa: 8,
    AtaqueEspecial: 5,
    DefesaEspecial: 9,
  },
};

var card30 = {
  name: "Lugia",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png",
  attributes: {
    Ataque: 9,
    Defesa: 5,
    AtaqueEspecial: 10,
    DefesaEspecial: 4,
  },
};

var card31 = {
  name: "Ho-Oh",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/250.png",
  attributes: {
    Ataque: 7,
    Defesa: 8,
    AtaqueEspecial: 6,
    DefesaEspecial: 10,
  },
};

var card32 = {
  name: "Celebi",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/251.png",
  attributes: {
    Ataque: 9,
    Defesa: 5,
    AtaqueEspecial: 8,
    DefesaEspecial: 3,
  },
};

var card33 = {
  name: "Treecko",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png",
  attributes: {
    Ataque: 6,
    Defesa: 7,
    AtaqueEspecial: 4,
    DefesaEspecial: 8,
  },
};

var card34 = {
  name: "Sceptile",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/254.png",
  attributes: {
    Ataque: 9,
    Defesa: 5,
    AtaqueEspecial: 8,
    DefesaEspecial: 3,
  },
};

var card35 = {
  name: "Torchic",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png",
  attributes: {
    Ataque: 7,
    Defesa: 4,
    AtaqueEspecial: 8,
    DefesaEspecial: 5,
  },
};

var card36 = {
  name: "Blaziken",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/257.png",
  attributes: {
    Ataque: 8,
    Defesa: 7,
    AtaqueEspecial: 10,
    DefesaEspecial: 5,
  },
};

var card37 = {
  name: "Mudkip",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png",
  attributes: {
    Ataque: 6,
    Defesa: 7,
    AtaqueEspecial: 5,
    DefesaEspecial: 9,
  },
};

var card38 = {
  name: "Swampert",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/260.png",
  attributes: {
    Ataque: 9,
    Defesa: 7,
    AtaqueEspecial: 5,
    DefesaEspecial: 6,
  },
};

var card39 = {
  name: "Shiftry",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/275.png",
  attributes: {
    Ataque: 7,
    Defesa: 8,
    AtaqueEspecial: 9,
    DefesaEspecial: 5,
  },
};

var card40 = {
  name: "Gardevoir",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png",
  attributes: {
    Ataque: 5,
    Defesa: 6,
    AtaqueEspecial: 10,
    DefesaEspecial: 8,
  },
};

var card41 = {
  name: "Aggron",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/306.png",
  attributes: {
    Ataque: 9,
    Defesa: 8,
    AtaqueEspecial: 5,
    DefesaEspecial: 4,
  },
};

var card42 = {
  name: "Flygon",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/330.png",
  attributes: {
    Ataque: 7,
    Defesa: 6,
    AtaqueEspecial: 8,
    DefesaEspecial: 5,
  },
};

var card43 = {
  name: "Zangoose",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/335.png",
  attributes: {
    Ataque: 8,
    Defesa: 7,
    AtaqueEspecial: 4,
    DefesaEspecial: 4,
  },
};

var card44 = {
  name: "Salamence",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/373.png",
  attributes: {
    Ataque: 10,
    Defesa: 8,
    AtaqueEspecial: 4,
    DefesaEspecial: 5,
  },
};

var card45 = {
  name: "Metagross",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/376.png",
  attributes: {
    Ataque: 9,
    Defesa: 10,
    AtaqueEspecial: 7,
    DefesaEspecial: 5,
  },
};

var card46 = {
  name: "Regirock",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/377.png",
  attributes: {
    Ataque: 7,
    Defesa: 10,
    AtaqueEspecial: 6,
    DefesaEspecial: 8,
  },
};

var card47 = {
  name: "Regice",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/378.png",
  attributes: {
    Ataque: 5,
    Defesa: 10,
    AtaqueEspecial: 6,
    DefesaEspecial: 9,
  },
};

var card48 = {
  name: "Registeel",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/379.png",
  attributes: {
    Ataque: 7,
    Defesa: 10,
    AtaqueEspecial: 4,
    DefesaEspecial: 9,
  },
};

var card49 = {
  name: "Latias",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/380.png",
  attributes: {
    Ataque: 5,
    Defesa: 6,
    AtaqueEspecial: 10,
    DefesaEspecial: 7,
  },
};

var card50 = {
  name: "Latios",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/381.png",
  attributes: {
    Ataque: 7,
    Defesa: 5,
    AtaqueEspecial: 9,
    DefesaEspecial: 6,
  },
};

var card51 = {
  name: "Kyogre",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/382.png",
  attributes: {
    Ataque: 9,
    Defesa: 5,
    AtaqueEspecial: 7,
    DefesaEspecial: 8,
  },
};

var card52 = {
  name: "Groudon",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/383.png",
  attributes: {
    Ataque: 9,
    Defesa: 7,
    AtaqueEspecial: 5,
    DefesaEspecial: 9,
  },
};

var card53 = {
  name: "Rayquaza",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png",
  attributes: {
    Ataque: 9,
    Defesa: 4,
    AtaqueEspecial: 10,
    DefesaEspecial: 6,
  },
};

var card54 = {
  name: "Jirachi",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/385.png",
  attributes: {
    Ataque: 5,
    Defesa: 4,
    AtaqueEspecial: 9,
    DefesaEspecial: 6,
  },
};

var card55 = {
  name: "Deoxys",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/386.png",
  attributes: {
    Ataque: 10,
    Defesa: 7,
    AtaqueEspecial: 8,
    DefesaEspecial: 5,
  },
};

var cards = [
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

var computerCard;
var playerCard;

sortButton.addEventListener("click", function () {
  var playerCardNumber = parseInt(Math.random() * cards.length);
  playerCard = cards[playerCardNumber];
  cards.splice[playerCardNumber];

  var computerCardNumber = parseInt(Math.random() * cards.length);
  computerCard = cards[computerCardNumber];

  while (playerCardNumber == computerCardNumber) {
    var computerCardNumber = parseInt(Math.random() * cards.length);
  }
  computerCard = cards[computerCardNumber];

  sortButton.disabled = true;
  playButton.disabled = false;
  cleanResult();
  showPlayerCard();
  clearComputerCard();
});

function showPlayerCard() {
  playerDiv.classList.remove("disabled");
  var playerCardDiv = document.getElementById("player__card");
  playerCardDiv.style.backgroundImage = `url(${playerCard.image})`;

  var imageSection =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id = 'options' class = 'card__status'>";

  var textOptions = "";

  for (var attribute in playerCard.attributes) {
    textOptions += `<input type = "radio" name = "attribute" value = "${attribute}">${attribute}: ${playerCard.attributes[attribute]}</input><br>`;
  }
  var name = `<p class = "card__subtitle">${playerCard.name}</p>`;
  playerCardDiv.innerHTML =
    imageSection + name + tagHTML + textOptions + "</div>";
}

function getSelectedAttribute() {
  var radioAttributes = document.getElementsByName("attribute");

  for (var i = 0; i < radioAttributes.length; i++) {
    if (radioAttributes[i].checked) {
      return radioAttributes[i].value;
    }
  }
}

function cleanResult() {
  result.innerHTML = "";
}

playButton.addEventListener("click", function () {
  var selectedAttribute = getSelectedAttribute();
  var playerAttribute = playerCard.attributes[selectedAttribute];
  var computerAttribute = computerCard.attributes[selectedAttribute];

  if (playerAttribute > computerAttribute) {
    result.innerHTML = "Parabéns, você venceu!";
  } else if (computerAttribute > playerAttribute) {
    result.innerHTML = `Infelizmente você perdeu, o atributo ${selectedAttribute} do adversário era ${computerAttribute}`;
  } else {
    result.innerHTML = `Deu empate! O atributo ${selectedAttribute} do adversário era ${computerAttribute}`;
  }
  sortButton.disabled = false;
  playButton.disabled = true;
  showComputerCard();
});

function showComputerCard() {
  machineDiv.classList.remove("disabled");
  var computerCardDiv = document.getElementById("machine__card");
  computerCardDiv.style.backgroundImage = `url(${computerCard.image})`;

  var imageSection =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id = 'options' class = 'card__status machine__status'>";

  var textOptions = "";

  for (var attribute in computerCard.attributes) {
    textOptions += `<p class="machine__attribute">${attribute}: ${computerCard.attributes[attribute]}</p></br>`;
  }
  var name = `<p class = "card__subtitle">${computerCard.name} </p>`;
  computerCardDiv.innerHTML =
    imageSection + name + tagHTML + textOptions + "</div>";
}

function clearComputerCard() {
  machineDiv.classList.add("disabled");
  var computerCardDiv = document.getElementById("machine__card");
  computerCardDiv.style.backgroundImage = "";

  var imageSection =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "";
  var name = "";
  computerCardDiv.innerHTML = "";
}
