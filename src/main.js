import data from "./data/pokemon/pokemon.js"; //Trae la base de datos de pokemon
import { filterByType, searchPokemonByName, sortData } from "./data.js";

const pokemonList = data.pokemon;

const listaPokemon = document.querySelector("#listaPokemon");
for (let i = 0; i < data.pokemon.length; i++) {
  //Se está iterando por la longitud del data.pokemon
  const poke = data.pokemon[i]; // Aumenta cada elemento de mi objeto
  mostrarPokemon(poke); // Se crea la función
}

function mostrarPokemon(poke) {
  let tipos = poke.type.map(
    (typeElement) => `<p class="tipo">${typeElement}</p>`); //Para mapear los tipos y extraerlos en un arreglo, crear un parrafo con los tipos (typeElement es cada elemento de mi poke.type(es un arreglo))
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
  listaPokemon.innerHTML = "";
}

//Para la búsqueda de la searchbar
const inputSearch = document.getElementById("searchbar"); //Se obtiene el texto del input
inputSearch.addEventListener("input", () => {
  //se agrega un evento con la acción "input" y una arrow function
  const searchText = inputSearch.value.toLowerCase(); //convierte el texto a minúsculas
  const searchPoke = searchPokemonByName(pokemonList, searchText); //Se declara la función "searchPokemonByName()"
  clearPokemonList(); // Limpia la búsqueda
  searchPoke.forEach((pokemonList) => mostrarPokemon(pokemonList));
});

//Para el método sort
const sortDropdown = document.getElementById("sortDropdown");
sortDropdown.addEventListener("change", () => {
  const selectedSort = sortDropdown.value;
  const sortPokemon = sortData(pokemonList, selectedSort);
  clearPokemonList();
  sortPokemon.forEach(pokemon => mostrarPokemon(pokemon));
  /*console.log(sortPokemon)*/
});

//Ventana modal

const modal = document.querySelector("#modulos");
for (let i = 0; i < data.pokemon.length; i++) {
  const poke = data.pokemon[i];
  showPokemon(poke);
}

function showPokemon(poke){
  let tipos = poke.type.map((typeElement) => `<p class="tipo">${typeElement}</p>`);
  tipos = tipos.join("-"); 
  let debilidades = poke.weaknesses.map((weaknessesElement) => `<p class="tipo">${weaknessesElement}</p>`);
  debilidades = debilidades.join("-"); 
  let resistente = poke.resistant.map((resistantElement) => `<p class="tipo">${resistantElement}</p>`);
 resistente = resistente.join("-"); 

  const div = document.createElement("div");
  div.classList.add("pokemonModulos");
  div.innerHTML = `
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
      ${tipos}
      </div>
   </div>
 <div class="details">
   <div class="parrafo">
     <p>About</p>
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
     <p>Weaknesses</p>
     <div class="W-types"> 
     ${debilidades}
     </div>
   </div>
   <div class="resistant">
     <p>Resistant</p>
     <div class="R-types">
     ${resistente}
  </div>
 </div>
 </div>
 `;

  modal.append(div); 

};





console.log(data);
