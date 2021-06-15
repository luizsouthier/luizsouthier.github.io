function get_data() {
a = [
  {
    region: "Kanto",
    name: "Bulbasaur",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Ivysaur",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Venusaur",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Charmander",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Charmeleon",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Charizard",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Squirtle",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Wartortle",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Blastoise",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Caterpie",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Metapod",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Butterfree",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Weedle",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Kakuna",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Beedrill",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Pidgey",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Pidgeotto",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Pidgeot",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Rattata",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Raticate",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Spearow",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Fearow",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Ekans",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Kanto",
    name: "Arbok",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Kanto",
    name: "Pikachu",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Raichu",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Sandshrew",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Sandslash",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Nidoran♀",
    gender: "female",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Nidorina",
    gender: "female",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Nidoqueen",
    gender: "female",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Nidoran♂",
    gender: "male",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Nidorino",
    gender: "male",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Nidoking",
    gender: "male",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Clefairy",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Clefable",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Vulpix",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Ninetales",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Jigglypuff",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Wigglytuff",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Zubat",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Golbat",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Oddish",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Gloom",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Vileplume",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Paras",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Parasect",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Venonat",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Kanto",
    name: "Venomoth",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Kanto",
    name: "Diglett",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Dugtrio",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Meowth",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Kanto",
    name: "Persian",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Kanto",
    name: "Psyduck",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Golduck",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Mankey",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Primeape",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Growlithe",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Kanto",
    name: "Arcanine",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Kanto",
    name: "Poliwag",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Poliwhirl",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Poliwrath",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Abra",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Kadabra",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Alakazam",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Machop",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Machoke",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Machamp",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Bellsprout",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Weepinbell",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Victreebel",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Tentacool",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Tentacruel",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Geodude",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Graveler",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Golem",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Ponyta",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Rapidash",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Slowpoke",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Slowbro",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Magnemite",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Magneton",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Farfetch'd",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Doduo",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Dodrio",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Seel",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Dewgong",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Grimer",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Kanto",
    name: "Muk",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Kanto",
    name: "Shellder",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Cloyster",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Gastly",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Haunter",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Gengar",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Onix",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Drowzee",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Kanto",
    name: "Hypno",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Kanto",
    name: "Krabby",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Kingler",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Voltorb",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Electrode",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Exeggcute",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Exeggutor",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Cubone",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Marowak",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Hitmonlee",
    gender: "male",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Hitmonchan",
    gender: "male",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Lickitung",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Koffing",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Kanto",
    name: "Weezing",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Kanto",
    name: "Rhyhorn",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Rhydon",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Chansey",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Tangela",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Kangaskhan",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Horsea",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Seadra",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Goldeen",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Seaking",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Staryu",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Starmie",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Mr. Mime",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Scyther",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Kanto",
    name: "Jynx",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Electabuzz",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Magmar",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Pinsir",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Kanto",
    name: "Tauros",
    gender: "male",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Magikarp",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Gyarados",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Lapras",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Kanto",
    name: "Ditto",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Eevee",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Vaporeon",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Jolteon",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Flareon",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Porygon",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Omanyte",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Kanto",
    name: "Omastar",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Kanto",
    name: "Kabuto",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Kabutops",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Aerodactyl",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Kanto",
    name: "Snorlax",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Articuno",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Zapdos",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Moltres",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Dratini",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Dragonair",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Dragonite",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Mewtwo",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kanto",
    name: "Mew",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Chikorita",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Bayleef",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Meganium",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Cyndaquil",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Quilava",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Typhlosion",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Totodile",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Croconaw",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Feraligatr",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Sentret",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Furret",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Hoothoot",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Noctowl",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Ledyba",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Ledian",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Spinarak",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Ariados",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Crobat",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Chinchou",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Lanturn",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Pichu",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Cleffa",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Igglybuff",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Togepi",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Togetic",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Natu",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Xatu",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Mareep",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Flaaffy",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Ampharos",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Bellossom",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Marill",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Azumarill",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Sudowoodo",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Politoed",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Hoppip",
    gender: "both",
    shiny: "FALSE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Skiploom",
    gender: "both",
    shiny: "FALSE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Jumpluff",
    gender: "both",
    shiny: "FALSE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Aipom",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Sunkern",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Sunflora",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Yanma",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Wooper",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Quagsire",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Espeon",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Umbreon",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Murkrow",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Slowking",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Misdreavus",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Unown",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Wobbuffet",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Girafarig",
    gender: "difference",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Pineco",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Johto",
    name: "Forretress",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Johto",
    name: "Dunsparce",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Gligar",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Steelix",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Snubbull",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Granbull",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Qwilfish",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Scizor",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Johto",
    name: "Shuckle",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Heracross",
    gender: "difference",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Sneasel",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Johto",
    name: "Teddiursa",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Ursaring",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Slugma",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Magcargo",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Swinub",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Piloswine",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Corsola",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Remoraid",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Octillery",
    gender: "difference",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Delibird",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Mantine",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Skarmory",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Houndour",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Houndoom",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Kingdra",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Phanpy",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Donphan",
    gender: "difference",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Porygon2",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Stantler",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Johto",
    name: "Smeargle",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Tyrogue",
    gender: "male",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Hitmontop",
    gender: "male",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Smoochum",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Elekid",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Magby",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Miltank",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Blissey",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Raikou",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Entei",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Suicune",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Larvitar",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Pupitar",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Tyranitar",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Lugia",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Ho-Oh",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Johto",
    name: "Celebi",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Treecko",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Grovyle",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Sceptile",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Torchic",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Combusken",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Blaziken",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Mudkip",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Marshtomp",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Swampert",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Poochyena",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Mightyena",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Zigzagoon",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Linoone",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Wurmple",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Silcoon",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Beautifly",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Cascoon",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Dustox",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Lotad",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Lombre",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Ludicolo",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Seedot",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Hoenn",
    name: "Nuzleaf",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Hoenn",
    name: "Shiftry",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Hoenn",
    name: "Taillow",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Swellow",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Wingull",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Pelipper",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Ralts",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Kirlia",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Gardevoir",
    gender: "female",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Surskit",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Masquerain",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Shroomish",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Breloom",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Slakoth",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Vigoroth",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Slaking",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Nincada",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Ninjask",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Shedinja",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Whismur",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Loudred",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Exploud",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Makuhita",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Hariyama",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Azurill",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Nosepass",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Skitty",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Delcatty",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Sableye",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Mawile",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Hoenn",
    name: "Aron",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Lairon",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Aggron",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Meditite",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Medicham",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Electrike",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Manectric",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Plusle",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Minun",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Volbeat",
    gender: "male",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Illumise",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Roselia",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Gulpin",
    gender: "difference",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Swalot",
    gender: "difference",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Carvanha",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Hoenn",
    name: "Sharpedo",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Hoenn",
    name: "Wailmer",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Wailord",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Numel",
    gender: "difference",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Camerupt",
    gender: "difference",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Torkoal",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Spoink",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Grumpig",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Spinda",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Trapinch",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Vibrava",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Flygon",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Cacnea",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Cacturne",
    gender: "difference",
    shiny: "FALSE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Swablu",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Altaria",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Zangoose",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Seviper",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Lunatone",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Solrock",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Barboach",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Whiscash",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Corphish",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Crawdaunt",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Baltoy",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Claydol",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Lileep",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Cradily",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Anorith",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Armaldo",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Feebas",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Milotic",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Castform",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Kecleon",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Shuppet",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Banette",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Duskull",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Dusclops",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Tropius",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Chimecho",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Absol",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Hoenn",
    name: "Wynaut",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Snorunt",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Glalie",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Spheal",
    gender: "both",
    shiny: "FALSE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Sealeo",
    gender: "both",
    shiny: "FALSE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Walrein",
    gender: "both",
    shiny: "FALSE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Clamperl",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Huntail",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Gorebyss",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Relicanth",
    gender: "difference",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Luvdisc",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Bagon",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Hoenn",
    name: "Shelgon",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Hoenn",
    name: "Salamence",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Hoenn",
    name: "Beldum",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Hoenn",
    name: "Metang",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Hoenn",
    name: "Metagross",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Hoenn",
    name: "Regirock",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Regice",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Registeel",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Latias",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Latios",
    gender: "male",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Kyogre",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Groudon",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Rayquaza",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Jirachi",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Hoenn",
    name: "Deoxys",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Turtwig",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Grotle",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Torterra",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Chimchar",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Monferno",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Infernape",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Piplup",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Prinplup",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Empoleon",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Starly",
    gender: "difference",
    shiny: "FALSE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Staravia",
    gender: "difference",
    shiny: "FALSE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Staraptor",
    gender: "difference",
    shiny: "FALSE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Bidoof",
    gender: "difference",
    shiny: "FALSE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Bibarel",
    gender: "difference",
    shiny: "FALSE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Kricketot",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Kricketune",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Shinx",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Luxio",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Luxray",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Budew",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Roserade",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Cranidos",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Rampardos",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Shieldon",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Bastiodon",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Burmy",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Wormadam",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Mothim",
    gender: "male",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Combee",
    gender: "difference",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Vespiquen",
    gender: "female",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Pachirisu",
    gender: "difference",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Buizel",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Floatzel",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Cherubi",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Cherrim",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Shellos",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Gastrodon",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Ambipom",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Drifloon",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Drifblim",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Buneary",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Lopunny",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Mismagius",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Honchkrow",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Glameow",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Purugly",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Chingling",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Stunky",
    gender: "both",
    shiny: "FALSE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Skuntank",
    gender: "both",
    shiny: "FALSE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Bronzor",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Bronzong",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Bonsly",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Mime Jr.",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Happiny",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Chatot",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Spiritomb",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Gible",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Gabite",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Garchomp",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Munchlax",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Riolu",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Lucario",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Hippopotas",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Hippowdon",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Skorupi",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Drapion",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Croagunk",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Toxicroak",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Carnivine",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Finneon",
    gender: "difference",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Lumineon",
    gender: "difference",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Mantyke",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Snover",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Abomasnow",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Weavile",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "TRUE"
  },
  {
    region: "Sinnoh",
    name: "Magnezone",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Lickilicky",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Rhyperior",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Tangrowth",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Electivire",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Magmortar",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Togekiss",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Yanmega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Leafeon",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Glaceon",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Gliscor",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Mamoswine",
    gender: "difference",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Porygon-Z",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Gallade",
    gender: "male",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Probopass",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Dusknoir",
    gender: "both",
    shiny: "TRUE",
    shadow: "TRUE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Froslass",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Rotom",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Uxie",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Mesprit",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Azelf",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Dialga",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Palkia",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Heatran",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Regigigas",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Giratina",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Cresselia",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Phione",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Manaphy",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Darkrai",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Shaymin",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Sinnoh",
    name: "Arceus",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Victini",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Snivy",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Servine",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Serperior",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Tepig",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Pignite",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Emboar",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Oshawott",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Dewott",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Samurott",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Patrat",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Watchog",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Lillipup",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Herdier",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Stoutland",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Purrloin",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Liepard",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Pansage",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Simisage",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Pansear",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Simisear",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Panpour",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Simipour",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Munna",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Musharna",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Pidove",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Tranquill",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Unfezant",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Blitzle",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Zebstrika",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Roggenrola",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Boldore",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Gigalith",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Woobat",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Swoobat",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Drilbur",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Excadrill",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Audino",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Timburr",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Gurdurr",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Conkeldurr",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Tympole",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Palpitoad",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Seismitoad",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Throh",
    gender: "male",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Sawk",
    gender: "male",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Sewaddle",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Swadloon",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Leavanny",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Venipede",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Whirlipede",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Scolipede",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Cottonee",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Whimsicott",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Petilil",
    gender: "female",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Lilligant",
    gender: "female",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Basculin",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Sandile",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Krokorok",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Krookodile",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Darumaka",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Darmanitan",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Maractus",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Dwebble",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Crustle",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Scraggy",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Scrafty",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Sigilyph",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Yamask",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Cofagrigus",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Tirtouga",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Carracosta",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Archen",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Archeops",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Trubbish",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Garbodor",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Zorua",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Zoroark",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Minccino",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Cinccino",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Gothita",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Gothorita",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Gothitelle",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Solosis",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Duosion",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Reuniclus",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Ducklett",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Swanna",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Vanillite",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Vanillish",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Vanilluxe",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Deerling",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Sawsbuck",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Emolga",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Karrablast",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Escavalier",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Foongus",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Amoonguss",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Frillish",
    gender: "difference",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Jellicent",
    gender: "difference",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Alomomola",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Joltik",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Galvantula",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Ferroseed",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Ferrothorn",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Klink",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Klang",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Klinklang",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Tynamo",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Eelektrik",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Eelektross",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Elgyem",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Beheeyem",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Litwick",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Lampent",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Chandelure",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Axew",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Fraxure",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Haxorus",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Cubchoo",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Beartic",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Cryogonal",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Shelmet",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Accelgor",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Stunfisk",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Mienfoo",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Mienshao",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Druddigon",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Golett",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Golurk",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Pawniard",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Bisharp",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Bouffalant",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Rufflet",
    gender: "male",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Braviary",
    gender: "male",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Vullaby",
    gender: "female",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Mandibuzz",
    gender: "female",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Heatmor",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Durant",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Deino",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Zweilous",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Hydreigon",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Larvesta",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Volcarona",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Cobalion",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Terrakion",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Virizion",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Tornadus",
    gender: "male",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Thundurus",
    gender: "male",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Reshiram",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Zekrom",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Landorus",
    gender: "male",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Kyurem",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Keldeo",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Meloetta",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unova",
    name: "Genesect",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Chespin",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Quilladin",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Chesnaught",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Fennekin",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Braixen",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Delphox",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Froakie",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Frogadier",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Greninja",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Bunnelby",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Diggersby",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Fletchling",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Fletchinder",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Talonflame",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Scatterbug",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Spewpa",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Vivillon",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Litleo",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Pyroar",
    gender: "difference",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Flabébé",
    gender: "female",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Floette",
    gender: "female",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Florges",
    gender: "female",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Skiddo",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Gogoat",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Pancham",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Pangoro",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Furfrou",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Espurr",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Meowstic",
    gender: "difference",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Honedge",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Doublade",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Aegislash",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Spritzee",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Aromatisse",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Swirlix",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Slurpuff",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Inkay",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Malamar",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Binacle",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Barbaracle",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Skrelp",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Dragalge",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Clauncher",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Clawitzer",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Helioptile",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Heliolisk",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Tyrunt",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Tyrantrum",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Amaura",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Aurorus",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Sylveon",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Hawlucha",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Dedenne",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Carbink",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Goomy",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Sliggoo",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Goodra",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Klefki",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Phantump",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Trevenant",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Pumpkaboo",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Gourgeist",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Bergmite",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Avalugg",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Noibat",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Noivern",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Xerneas",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Yveltal",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Zygarde",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Diancie",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Hoopa",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Kalos",
    name: "Volcanion",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unknown",
    name: "Meltan",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Unknown",
    name: "Melmetal",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Galar",
    name: "Obstagoon",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Galar",
    name: "Perrserker",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Galar",
    name: "Sirfetch'd",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Galar",
    name: "Mr. Rime",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Galar",
    name: "Runerigus",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Rattata alolan",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Raticate alolan",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Raichu alolan",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Sandshrew alolan",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Sandslash alolan",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Vulpix alolan",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Ninetales alolan",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Diglett alolan",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Dugtrio alolan",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Meowth alolan",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Persian alolan",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Geodude alolan",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Graveler alolan",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Golem alolan",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Grimer alolan",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Muk alolan",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Exeggutor alolan",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Marowak alolan",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Meowth galarian",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Ponyta galarian",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Rapidash galarian",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Slowpoke galarian",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Slowbro galarian",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Farfetch'd galarian",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Weezing galarian",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Slowking galarian",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Zigzagoon galarian",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Linoone galarian",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Darumaka galarian",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Darmanitan galarian",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Darmanitan zen galarian",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Yamask galarian",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Stunfisk galarian",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Mr. Mime galarian",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown A",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown B",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown C",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown D",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown E",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown F",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown G",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown H",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown I",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown J",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown K",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown L",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown M",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown N",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown O",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown P",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown Q",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown R",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown S",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown T",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown U",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown V",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown W",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown X",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown Y",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown Z",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown !",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Unown ?",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Spinda 1",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Spinda 2",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Spinda 3",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Spinda 4",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Spinda 5",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Spinda 6",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Spinda 7",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Spinda 8",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Spinda 9",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Castform Normal",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Castform Sunny",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Castform Rainy",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Castform Snowy",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Deoxys Normal",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Deoxys Attack",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Deoxys Defense",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Deoxys Speed",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Burmy plant",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Burmy sandy",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Burmy trash",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Wormadam plant",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Wormadam sandy",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Wormadam trash",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Cherrim overcast",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Cherrim sunshine",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Shellos west",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Shellos east",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Gastrodon west",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Gastrodon east",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Rotom regular",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Rotom heat",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Rotom wash",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Rotom fan",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Rotom frost",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Rotom mow",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Giratina altered",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Giratina origin",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Shaymin land",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Shaymin sky",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Arceus normal",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Arceus bug",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Arceus dark",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Arceus dragon",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Arceus electric",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Arceus fairy",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Arceus fighting",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Arceus fire",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Arceus flying",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Arceus ghost",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Arceus grass",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Arceus ground",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Arceus ice",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Arceus poison",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Arceus psychic",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Arceus rock",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Arceus steel",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Arceus water",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Basculin red-striped",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Basculin blue-striped",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Darmanitan standard",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Darmanitan zen",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Deerling spring",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Deerling summer",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Deerling autumn",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Deerling winter",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Sawsbuck spring",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Sawsbuck summer",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Sawsbuck autumn",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Sawsbuck winter",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Tornadus incarnate",
    gender: "male",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Tornadus therian",
    gender: "male",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Thundurus incarnate",
    gender: "male",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Thundurus therian",
    gender: "male",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Landorus incarnate",
    gender: "male",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Landorus therian",
    gender: "male",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Kyurem regular",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Kyurem white",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Kyurem black",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Keldeo ordinary",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Keldeo resolute",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Meloetta aria",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Meloetta pirouette",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Genesect regular",
    gender: "genderless",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Genesect shock",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Genesect burn",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Genesect chill",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Forms",
    name: "Genesect douse",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Venusaur mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Charizard x mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Charizard y mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Blastoise mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Beedrill mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Pidgeot mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Houndoom mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Gengar mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Abomasnow mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Alakazam mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Slowbro mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Kangaskhan mega",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Pinsir mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Gyarados mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Aerodactyl mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Mewtwo x mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Mewtwo y mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Ampharos mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Steelix mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Scizor mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Heracross mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Tyranitar mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Sceptile mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Blaziken mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Swampert mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Gardevoir mega",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Sableye mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Mawile mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Aggron mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Medicham mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Manectric mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Sharpedo mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Camerupt mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Altaria mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Banette mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Absol mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Glalie mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Salamence mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Metagross mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Latias mega",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Latios mega",
    gender: "male",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Rayquaza mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Lopunny mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Garchomp mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Lucario mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Gallade mega",
    gender: "male",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Mega",
    name: "Audino mega",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Bulbasaur fall",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Bulbasaur party hat",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Bulbasaur visor",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Venusaur clone",
    gender: "difference",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Charmander fall",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Charmander party hat",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Charmander visor",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Charizard clone",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Squirtle sunglasses",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Squirtle fall",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Squirtle party hat",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Squirtle visor",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Wartortle sunglasses",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Blastoise sunglasses",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Blastoise clone",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Raticate party",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu festive",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu ash",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu party",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu witch",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu summer",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu fragment",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu winter",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu flower",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu detective",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu worldcap",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu straw hat",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu fall",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu party hat",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu clone",
    gender: "difference",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu libre",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu spring",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu safari",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu charizard",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu umbreon",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu rayquaza",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu lucario",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu fly",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu explorer",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu holiday",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pikachu new year",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Raichu festive",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Raichu ash",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Raichu party",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Raichu witch",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Raichu summer",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Raichu fragment",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Raichu winter",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Raichu flower",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Raichu detective",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Raichu worldcap",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Raichu new year",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Slowpoke new year",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Slowbro new year",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Nidorino party hat",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Gengar party hat",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Gengar halloween",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Chansey flower",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Eevee flower",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Eevee party hat",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Vaporeon flower",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Jolteon flower",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Flareon flower",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Mewtwo armored",
    gender: "genderless",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pichu festive",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pichu ash",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pichu party",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pichu witch",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pichu summer",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pichu winter",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pichu flower",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Pichu new year",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Togepi flower",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Espeon flower",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Umbreon flower",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Wobbuffet party",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Delibird holiday",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Stantler holiday",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Blissey flower",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Smoochum bow",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Wurmple party",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Kirlia hat",
    gender: "both",
    shiny: "FALSE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Sableye halloween",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Shinx hat",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Buneary flower",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Happiny flower",
    gender: "female",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Croagunk cap",
    gender: "difference",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Leafeon flower",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Glaceon flower",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Cubchoo holiday",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  },
  {
    region: "Event",
    name: "Sylveon flower",
    gender: "both",
    shiny: "TRUE",
    shadow: "FALSE",
    shadowshiny: "FALSE"
  }
];

return a;

}