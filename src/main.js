import data from "./data/pokemon/pokemon.js"; //Trae la base de datos de pokemon
import { filterByType, searchPokemonByName, sortData, computeTypePercentage } from "./data.js";

/*
import Chart from 'chart.js/auto'
*/

const pokemonList = data.pokemon;
const listaPokemon = document.querySelector("#listaPokemon");
for (let i = 0; i < data.pokemon.length; i++) {
  //Se está iterando por la longitud del data.pokemon
  const poke = data.pokemon[i]; // Aumenta cada elemento de mi objeto
  mostrarPokemon(poke); // Se crea la función
}
function mostrarPokemon(poke) {
  let tipos = poke.type.map((typeElement) => `<p class="tipo ${typeElement}">${typeElement}</p>`); //Para mapear los tipos y extraerlos en un arreglo, crear un parrafo con los tipos (typeElement es cada elemento de mi poke.type(es un arreglo))
  tipos = tipos.join("-"); //Para unir los elementos de un arreglo
  const div = document.createElement("div");
  div.classList.add("pokemon"); // Se asigna la clase pokemon
  //Para crear un fragmento HTML dentro del div creado
  // Concatenación con literales de plantilla
  //El ciclo for trae los datos de este div con la const poke.
  div.innerHTML = `
    <div class="pokemon">
      <div class="pokemon-imagen">
        <img src="${poke.img}" alt="Pokemon ${poke.name}">
      </div>
      <div class="pokemon-info">
        <div class="nombre-contenedor">
          <p class="pokemon-id">#${poke.num}</p>
          <h2 class="pokemon-nombre">${poke.name}</h2>
        </div>
        <div class="pokemon-tipos">
          ${tipos}
        </div>
      </div>
    </div>
  `;
  listaPokemon.append(div); //Se inserta en el id lista pokemon
  div.addEventListener("click", () => mostrarModal(poke));
}
/*console.log(poke.stats["base-attack"]) //Ejemplos para usar el console.log
    console.log(poke.resistant[0]) // Ejemplos para usar el console.log
    Nota: el parámetro va dentro del console.log*/
/*addEventListener(accion, funcion )*/
/*Para filtros*/
//Función que previamente se importó (del data.js) y para usarla se adaptaron a los valores de mi data.pokemon
const typeDropdown = document.getElementById("typeDropdown");
typeDropdown.addEventListener("change", () => {
  // al evento listener se le da una acción (change) y el otro parámetro es una función.
  //En este caso es una arrow function. //arrow function -->  () => { };
  const selectedType = typeDropdown.value; //sacado del html
  const filteredPokemon = filterByType(pokemonList, selectedType); //la condicion de arriba
  clearPokemonList(); //cada que cambie de tipo quiero limpiar la búsqueda
  filteredPokemon.forEach((poke) => mostrarPokemon(poke));
});
function clearPokemonList() {
  listaPokemon.innerHTML = ""
}
//Para la búsqueda de la searchbar
const inputSearch = document.getElementById("searchbar"); //Se obtiene el texto del input
inputSearch.addEventListener("input", () => {
  //se agrega un evento con la acción "input" y una arrow function
  const searchText = inputSearch.value.toLowerCase(); //convierte el texto a minúsculas
  const searchPoke = searchPokemonByName(pokemonList, searchText); //Se declara la función "searchPokemonByName()"
  clearPokemonList(); // Limpia la búsqueda
  searchPoke.forEach((pokemonList) => mostrarPokemon(pokemonList));
});//Para el botón reset
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', function() {
  location.reload();
});//Para el método sort
const sortDropdown = document.getElementById("sortDropdown");
sortDropdown.addEventListener("change", () => {
  const selectedSort = sortDropdown.value;
  const sortPokemon = sortData(pokemonList, selectedSort);
  clearPokemonList();
  sortPokemon.forEach(pokemon => mostrarPokemon(pokemon));
  /*console.log(sortPokemon)*/
});//ventana modal opcionB:
function mostrarModal(poke) {
  const modal = document.getElementById("modal-content");
  modal.innerHTML = `
    <div class="pokemonModulos">
    <span class="close"><i class="fas fa-times"></i></span>
      <div class="encabezadoModulo">
        <h2 class="pokemon-nombre">${poke.name}</h2>
        <p class="pokemon-id">#${poke.num}</p>
      </div>
      <div class="containerAbout">
        <div class="lateralIzquierdo">
          <div class="pokemon-imagen-modulo">
            <img src="${poke.img}" alt="Pokemon ${poke.name}">
          </div>
          <div class="pokemon-tipos">
            ${poke.type.map((typeElement) => `<p class="tipo ${typeElement}">${typeElement}</p>`).join("")}
          </div>
        </div>
        <div class="details">
          <div class="parrafo">
            <p class="bold">About</p>
            <p>${poke.about}</p>
          </div>
          <div class="HW">
            <div>
              <p class="bold">Height</p>
              <p>${poke.size.height}</p>
            </div>
            <div>
              <p class="bold">Weight</p>
              <p>${poke.size.weight}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="WR">
        <div class="Weaknesses">
          <p class="bold">Weaknesses</p>
          <div class="W-types">            ${poke.weaknesses.map((typeElement) => `<p class="tipo ${typeElement}">${typeElement}</p>`).join("")}
          </div>
        </div>
        <div class="resistant">
          <p class="bold">Resistant</p>
          <div class="R-types">
            ${poke.resistant.map((typeElement) => `<p class="tipo ${typeElement}">${typeElement}</p>`).join("")}
          </div>
        </div>
      </div>
    </div>
  `;
  const closeBtn = modal.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  modal.style.display = "flex";
}
function nuevoGrafico(chartElement, data) {
  new Chart (chartElement, {
    type: "bar",
    data: {
      labels: [
        "Dragon",
        "Poison",
        "Flying",
        "Bug",
        "Normal",
        "Ground",
        "Psychic",
        "Ice",
        "Ghost",
        "Grass",
        "Fire",
        "Water",
        "Electric",
        "Fighting",
        "Rock"
      ],
      datasets: [
        {
          label: "Percentage",
          data: data,
          backgroundColor: [
            "#7038F8",
            "#A43E9E",
            "#A891EC",
            "#A7B723",
            "#AAA67F",
            "#DEC16B",
            "#FB5584",
            "#9AD6DF",
            "#70559B",
            "#75574C",
            "#F57D31",
            "#6493EB",
            "#F9CF30",
            "#C12239",
            "#B69E31"
          ]
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Percentage of pokemon by type',
        fontSize: 30,
        padding: 10,
        fontColor: '#F4F5F6',
      },
      legend: {
        labels: {
          fontFamily: 'Lato',
          fontColor: '#F4F5F6',
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#F4F5F6' // Cambia el color de la fuente de las etiquetas en el eje X
          }
        },
        y: {
          ticks: {
            color: '#F4F5F6' // Cambia el color de la fuente de las etiquetas en el eje Y
          }
        }
      }
    }
  });
}
// Código para calcular el porcentaje de cada tipo de Pokémon referenciando data.js
const typePercentages = [
  computeTypePercentage(pokemonList, "dragon"),
  computeTypePercentage(pokemonList, "poison"),
  computeTypePercentage(pokemonList, "flying"),
  computeTypePercentage(pokemonList, "bug"),
  computeTypePercentage(pokemonList, "normal"),
  computeTypePercentage(pokemonList, "ground"),
  computeTypePercentage(pokemonList, "psychic"),
  computeTypePercentage(pokemonList, "ice"),
  computeTypePercentage(pokemonList, "ghost"),
  computeTypePercentage(pokemonList, "grass"),
  computeTypePercentage(pokemonList, "fire"),
  computeTypePercentage(pokemonList, "water"),
  computeTypePercentage(pokemonList, "electric"),
  computeTypePercentage(pokemonList, "fighting"),
  computeTypePercentage(pokemonList, "rock")
];

const chartElement = document.getElementById("typesGraph");
nuevoGrafico(chartElement, typePercentages);
const showGraphLink = document.getElementById("show-graph");
const graphContainer = document.getElementById("graphContainer");
const mainSection = document.getElementById("todos");
graphContainer.style.display = "none";
showGraphLink.addEventListener("click", () => {
  if (graphContainer.style.display === "none") {
    ((graphContainer.style.display = "block") && (mainSection.style.display = "none"))  } else {
    ((graphContainer.style.display = "none") && (mainSection.style.display = "block"))
  }
});

