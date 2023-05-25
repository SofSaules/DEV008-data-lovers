import data from './data/pokemon/pokemon.js'; //Trae la base de datos de pokemon
import { example } from './data.js';  

const listaPokemon = document.querySelector("#listaPokemon");
for (let i = 0; i < data.pokemon.length; i++) {  //Se está iterando por la longitud del data.pokemon
  const poke = data.pokemon[i];  // Cada elemento de mi objeto
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
}


console.log(example, data);
