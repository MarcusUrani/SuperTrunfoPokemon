var botaoSortear = document.querySelector(".botao__sortear");
var botaoJogar = document.querySelector(".botao__jogar");
var botaoReiniciar = document.querySelector(".botao__resetar");

var carta1 = {
    nome: "Charmander",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    atributos: {
        ataque: 7,
        defesa: 6,
        ataqueEspecial: 8,
        defesaEspecial: 5
    }
};

var carta2 = {
    nome: "Bulbassauro",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    atributos: {
        ataque: 6,
        defesa: 8,
        ataqueEspecial: 7,
        defesaEspecial: 7
    }
};

var carta3 = {
    nome: "Squirtle",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    atributos: {
        ataque: 8,
        defesa: 5,
        ataqueEspecial: 8,
        defesaEspecial: 7
    }
};

var carta4 = {
    nome: "Charizard",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    atributos: {
        ataque: 10,
        defesa: 7,
        ataqueEspecial: 9,
        defesaEspecial: 5
    }
};

var carta5 = {
    nome: "Venussaur",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    atributos: {
        ataque: 6,
        defesa: 9,
        ataqueEspecial: 7,
        defesaEspecial: 8
    }
};

var carta6 = {
    nome: "Blastoise",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    atributos: {
        ataque: 8,
        defesa: 7,
        ataqueEspecial: 5,
        defesaEspecial: 10
    }
};

var carta7 = {
    nome: "Pikachu",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    atributos: {
        ataque: 8,
        defesa: 5,
        ataqueEspecial: 9,
        defesaEspecial: 6
    }
};

var carta8 = {
    nome: "Ninetales",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png",
    atributos: {
        ataque: 9,
        defesa: 4,
        ataqueEspecial: 8,
        defesaEspecial: 5
    }
};

var carta9 = {
    nome: "Arcanine",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/059.png",
    atributos: {
        ataque: 8,
        defesa: 6,
        ataqueEspecial: 6,
        defesaEspecial: 7
    }
};

var carta10 = {
    nome: "Cloyster",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/091.png",
    atributos: {
        ataque: 6,
        defesa: 8,
        ataqueEspecial: 5,
        defesaEspecial: 10
    }
};

var carta11 = {
    nome: "Gengar",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png",
    atributos: {
        ataque: 8,
        defesa: 3,
        ataqueEspecial: 9,
        defesaEspecial: 5
    }
};

var carta12 = {
    nome: "Gyarados",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/130.png",
    atributos: {
        ataque: 9,
        defesa: 5,
        ataqueEspecial: 8,
        defesaEspecial: 6
    }
};

var carta13 = {
    nome: "Eevee",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png",
    atributos: {
        ataque: 6,
        defesa: 7,
        ataqueEspecial: 5,
        defesaEspecial: 8
    }
};

var carta14 = {
    nome: "Articuno",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/144.png",
    atributos: {
        ataque: 9,
        defesa: 4,
        ataqueEspecial: 10,
        defesaEspecial: 6
    }
};

var carta15 = {
    nome: "Moltres",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/146.png",
    atributos: {
        ataque: 7,
        defesa: 8,
        ataqueEspecial: 6,
        defesaEspecial: 7
    }
};

var carta16 = {
    nome: "Zapdos",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/145.png",
    atributos: {
        ataque: 10,
        defesa: 4,
        ataqueEspecial: 8,
        defesaEspecial: 6
    }
};

var carta17 = {
    nome: "Dragonite",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/149.png",
    atributos: {
        ataque: 8,
        defesa: 7,
        ataqueEspecial: 9,
        defesaEspecial: 6
    }
};

var carta18 = {
    nome: "Mewtwo",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/150.png",
    atributos: {
        ataque: 9,
        defesa: 6,
        ataqueEspecial: 10,
        defesaEspecial: 5
    }
};

var carta19 = {
    nome: "Mew",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/151.png",
    atributos: {
        ataque: 8,
        defesa: 7,
        ataqueEspecial: 9,
        defesaEspecial: 6
    }
};

var carta20 = {
    nome: "Chikorita",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png",
    atributos: {
        ataque: 7,
        defesa: 8,
        ataqueEspecial: 6,
        defesaEspecial: 4
    }
};

var carta21 = {
    nome: "Meganium",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/154.png",
    atributos: {
        ataque: 9,
        defesa: 4,
        ataqueEspecial: 8,
        defesaEspecial: 6
    }
};

var carta22 = {
    nome: "Cyndaquil",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/155.png",
    atributos: {
        ataque: 7,
        defesa: 5,
        ataqueEspecial: 6,
        defesaEspecial: 3
    }
};

var carta23 = {
    nome: "Typhlosion",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/157.png",
    atributos: {
        ataque: 9,
        defesa: 5,
        ataqueEspecial: 8,
        defesaEspecial: 4
    }
};

var carta24 = {
    nome: "Totodile",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/158.png",
    atributos: {
        ataque: 5,
        defesa: 7,
        ataqueEspecial: 6,
        defesaEspecial: 8
    }
};

var carta25 = {
    nome: "Feraligatr",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/160.png",
    atributos: {
        ataque: 9,
        defesa: 5,
        ataqueEspecial: 8,
        defesaEspecial: 6
    }
};

var carta26 = {
    nome: "Raikou",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/243.png",
    atributos: {
        ataque: 8,
        defesa: 6,
        ataqueEspecial: 5,
        defesaEspecial: 8
    }
};

var carta27 = {
    nome: "Entei",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/244.png",
    atributos: {
        ataque: 9,
        defesa: 4,
        ataqueEspecial: 10,
        defesaEspecial: 5
    }
};

var carta28 = {
    nome: "Suicune",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/245.png",
    atributos: {
        ataque: 6,
        defesa: 8,
        ataqueEspecial: 5,
        defesaEspecial: 9
    }
};

var carta29 = {
    nome: "Tyranitar",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/248.png",
    atributos: {
        ataque: 10,
        defesa: 8,
        ataqueEspecial: 5,
        defesaEspecial: 9
    }
};

var carta30 = {
    nome: "Lugia",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/249.png",
    atributos: {
        ataque: 9,
        defesa: 5,
        ataqueEspecial: 10,
        defesaEspecial: 4
    }
};

var carta31 = {
    nome: "Ho-Oh",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/250.png",
    atributos: {
        ataque: 7,
        defesa: 8,
        ataqueEspecial: 6,
        defesaEspecial: 10
    }
};

var carta32 = {
    nome: "Celebi",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/251.png",
    atributos: {
        ataque: 9,
        defesa: 5,
        ataqueEspecial: 8,
        defesaEspecial: 3
    }
};

var carta33 = {
    nome: "Treecko",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/252.png",
    atributos: {
        ataque: 6,
        defesa: 7,
        ataqueEspecial: 4,
        defesaEspecial: 8
    }
};

var carta34 = {
    nome: "Sceptile",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/254.png",
    atributos: {
        ataque: 9,
        defesa: 5,
        ataqueEspecial: 8,
        defesaEspecial: 3
    }
};

var carta35 = {
    nome: "Torchic",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/255.png",
    atributos: {
        ataque: 7,
        defesa: 4,
        ataqueEspecial: 8,
        defesaEspecial: 5
    }
};

var carta36 = {
    nome: "Blaziken",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/257.png",
    atributos: {
        ataque: 8,
        defesa: 7,
        ataqueEspecial: 10,
        defesaEspecial: 5
    }
};

var carta37 = {
    nome: "Mudkip",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/258.png",
    atributos: {
        ataque: 6,
        defesa: 7,
        ataqueEspecial: 5,
        defesaEspecial: 9
    }
};

var carta38 = {
    nome: "Swampert",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/260.png",
    atributos: {
        ataque: 9,
        defesa: 7,
        ataqueEspecial: 5,
        defesaEspecial: 6
    }
};

var carta39 = {
    nome: "Shiftry",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/275.png",
    atributos: {
        ataque: 7,
        defesa: 8,
        ataqueEspecial: 9,
        defesaEspecial: 5
    }
};

var carta40 = {
    nome: "Gardevoir",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/282.png",
    atributos: {
        ataque: 5,
        defesa: 6,
        ataqueEspecial: 10,
        defesaEspecial: 8
    }
};

var carta41 = {
    nome: "Aggron",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/306.png",
    atributos: {
        ataque: 9,
        defesa: 8,
        ataqueEspecial: 5,
        defesaEspecial: 4
    }
};

var carta42 = {
    nome: "Flygon",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/330.png",
    atributos: {
        ataque: 7,
        defesa: 6,
        ataqueEspecial: 8,
        defesaEspecial: 5
    }
};

var carta43 = {
    nome: "Zangoose",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/335.png",
    atributos: {
        ataque: 8,
        defesa: 7,
        ataqueEspecial: 4,
        defesaEspecial: 4
    }
};

var carta44 = {
    nome: "Salamence",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/373.png",
    atributos: {
        ataque: 10,
        defesa: 8,
        ataqueEspecial: 4,
        defesaEspecial: 5
    }
};

var carta45 = {
    nome: "Metagross",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/376.png",
    atributos: {
        ataque: 9,
        defesa: 10,
        ataqueEspecial: 7,
        defesaEspecial: 5
    }
};

var carta46 = {
    nome: "Regirock",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/377.png",
    atributos: {
        ataque: 7,
        defesa: 10,
        ataqueEspecial: 6,
        defesaEspecial: 8
    }
};

var carta47 = {
    nome: "Regice",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/378.png",
    atributos: {
        ataque: 5,
        defesa: 10,
        ataqueEspecial: 6,
        defesaEspecial: 9
    }
};

var carta48 = {
    nome: "Registeel",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/379.png",
    atributos: {
        ataque: 7,
        defesa: 10,
        ataqueEspecial: 4,
        defesaEspecial: 9
    }
};

var carta49 = {
    nome: "Latias",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/380.png",
    atributos: {
        ataque: 5,
        defesa: 6,
        ataqueEspecial: 10,
        defesaEspecial: 7
    }
};

var carta50 = {
    nome: "Latios",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/381.png",
    atributos: {
        ataque: 7,
        defesa: 5,
        ataqueEspecial: 9,
        defesaEspecial: 6
    }
};

var carta51 = {
    nome: "Kyogre",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/382.png",
    atributos: {
        ataque: 9,
        defesa: 5,
        ataqueEspecial: 7,
        defesaEspecial: 8
    }
};

var carta52 = {
    nome: "Groudon",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/383.png",
    atributos: {
        ataque: 9,
        defesa: 7,
        ataqueEspecial: 5,
        defesaEspecial: 9
    }
};

var carta53 = {
    nome: "Rayquaza",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/384.png",
    atributos: {
        ataque: 9,
        defesa: 4,
        ataqueEspecial: 10,
        defesaEspecial: 6
    }
};

var carta54 = {
    nome: "Jirachi",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/385.png",
    atributos: {
        ataque: 5,
        defesa: 4,
        ataqueEspecial: 9,
        defesaEspecial: 6
    }
};

var carta55 = {
    nome: "Deoxys",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/386.png",
    atributos: {
        ataque: 10,
        defesa: 7,
        ataqueEspecial: 8,
        defesaEspecial: 5
    }
};

var cartas = [
    carta1,
    carta2,
    carta3,
    carta4,
    carta5,
    carta6,
    carta7,
    carta8,
    carta9,
    carta10,
    carta11,
    carta12,
    carta13,
    carta14,
    carta15,
    carta16,
    carta17,
    carta18,
    carta19,
    carta20,
    carta21,
    carta22,
    carta23,
    carta24,
    carta25,
    carta26,
    carta27,
    carta28,
    carta29,
    carta30,
    carta31,
    carta32,
    carta33,
    carta34,
    carta35,
    carta36,
    carta37,
    carta38,
    carta39,
    carta40,
    carta41,
    carta42,
    carta43,
    carta44,
    carta45,
    carta46,
    carta47,
    carta48,
    carta49,
    carta50,
    carta51,
    carta52,
    carta53,
    carta54,
    carta55
];

var cartaComputador;
var cartaJogador;

botaoSortear.addEventListener("click", function () {
    var numeroCartaJogador = parseInt(Math.random() * cartas.length);
    cartaJogador = cartas[numeroCartaJogador];
    cartas.splice[numeroCartaJogador];

    var numeroCartaComputador = parseInt(Math.random() * cartas.length);
    cartaComputador = cartas[numeroCartaComputador];

    while (numeroCartaJogador == numeroCartaComputador) {
        var numeroCartaComputador = parseInt(Math.random() * cartas.length);
    }
    cartaComputador = cartas[numeroCartaComputador];

    botaoSortear.disabled = true;
    botaoJogar.disabled = false;

    var nomePokemon = document.querySelector(".nome__pokemon");
    nomePokemon.innerHTML = cartaJogador.nome;

    var campoImagem = document.querySelector(".imagem__carta");
    campoImagem.innerHTML =
        '<img class = "imagem__cartas" src =' + cartaJogador.imagem + ">";

    exibirOpcoes();
});

function exibirOpcoes() {
    var opcoes = document.querySelector(".opcoes");
    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto +=
            "<input type = 'radio' name = 'atributo' value = " +
            atributo +
            ">" +
            atributo +
            "</input>";
    }
    opcoes.classList.add("display");
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked) {
            return radioAtributos[i].value;
        }
    }
}

botaoJogar.addEventListener("click", function () {
    var atributoSelecionado = obtemAtributoSelecionado();
    var resultado = document.querySelector(".resultado");
    var atributoJogador = cartaJogador.atributos[atributoSelecionado];
    var atributoComputador = cartaComputador.atributos[atributoSelecionado];

    if (atributoJogador > atributoComputador) {
        resultado.innerHTML = "Parabéns, você venceu!";
    } else if (atributoComputador > atributoJogador) {
        resultado.innerHTML =
            "Infelizmente você perdeu, o atributo do computador era " +
            atributoComputador;
    } else {
        resultado.innerHTML =
            "Deu empate! O atributo do computador também era " + atributoComputador;
    }
});

// botaoReiniciar.addEventListener("click", function () {
//   location.reload();
// });