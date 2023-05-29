import data from './data/pokemon/pokemon.js'; //Trae la base de datos de pokemon
import { example,
  filterByType,
  searchPokemonByName,
} from './data.js';


const pokemonList = data.pokemon;

const listaPokemon = document.querySelector("#listaPokemon");
for (let i = 0; i < data.pokemon.length; i++) {  //Se está iterando por la longitud del data.pokemon
  const poke = data.pokemon[i];  // Aumenta cada elemento de mi objeto
  mostrarPokemon(poke);  // Se crea la función
}

function mostrarPokemon(poke) {
  let tipos = poke.type.map((typeElement) => `<p class="tipo">${typeElement}</p>`);  //Para mapear los tipos y extraerlos en un arreglo, crear un parrafo con los tipos (typeElement es cada elemento de mi poke.type(es un arreglo))
  tipos = tipos.join('-'); //Para unir los elementos de un arreglo
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
  listaPokemon.append(div);  //Se inserta en el id lista pokemon


  /*console.log(poke.stats["base-attack"]) //Ejemplos para usar el console.log
    console.log(poke.resistant[0]) // Ejemplos para usar el console.log
    Nota: el parámetro va dentro del console.log*/
}

/*addEventListener(accion, funcion )*/

/*Para filtros*/

//Función que previamente se importó (del data.js) y para usarla se adaptaron a los valores de mi data.pokemon 
const typeDropdown = document.getElementById('typeDropdown');
typeDropdown.addEventListener('change', () => { // al evento listener se le da una acción (change) y el otro parámetro es una función. 
  //En este caso es una arrow function. //arrow function -->  () => { };
  const selectedType = typeDropdown.value; //sacado del html 
  const filteredPokemon = filterByType(data.pokemon, selectedType); //la condicion de arriba
  clearPokemonList(); //cada que cambie de tipo quiero limpiar la búsqueda 
  filteredPokemon.forEach(poke => mostrarPokemon(poke));
});
function clearPokemonList() {
  listaPokemon.innerHTML = '';
}

//Para la búsqueda de la searchbar

const inputSearch = document.getElementById('searchbar'); //Se obtiene el texto del input
inputSearch.addEventListener('input', () => { //se agrega un evento con la acción "input" u una arrow function
  const searchText = inputSearch.value.toLowerCase(); //convierte el texto a minúsculas
  const searchPoke = searchPokemonByName(pokemonList, searchText); //Se declara la función "searchPokemonByName()"

  clearPokemonList(); // Limpia la búsqueda
  searchPoke.forEach(pokemonList => mostrarPokemon(pokemonList));

});



console.log(example, data);