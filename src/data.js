//COMENTARIO
/**
 * funcion generica que puede filtrar lo que quiera
 * la función recibe dos parametros, el primero es un array de objetos(data) y
 * el segundo un tipo de elemento (condicion)
 */
export function filterByType(arrayObj, elementTypeDelObj) {
  //filter() regresa un arreglo y recibe una función. Antes de la flechita es el parametro recibido, después es el cuerpo de mi función
  // el parametro es un elemento de mi arrayObjeto
  const pokemon = arrayObj.filter((obj) =>
    obj.type.includes(elementTypeDelObj)
  );
  return pokemon;
}

//se utilizó el método startsWith() y un or.
export const searchPokemonByName = (arrayObj, input) => {
  const pokemon = arrayObj.filter(
    (obj) =>
      obj.name.startsWith(input.toLowerCase()) || obj.num === input
  );
  return pokemon;
};

//Sort
/**
 * Función para ordenar el arrayObj por diferentes criterios.
 * La función recibe dos parámetros: arrayObj (array de objetos) y orderBy (tipo de ordenamiento).
 * Retorna el arrayObj ordenado según el criterio especificado.
 */
export const sortData = (data, options) => {
  /*console.log("--->", data.map((e) => e.num));*/
  let newPokemons;
  switch (options) {
  case "asc":
    newPokemons = data.sort((a, b) => a.name.localeCompare(b.name));
    return newPokemons;
  case "desc":
    newPokemons = data.sort((a, b) => b.name.localeCompare(a.name));
    /*console.log("alafebetico descendente", newPokemons);*/
    return newPokemons;
  case "numAsc":
    newPokemons = data.sort((a, b) => Number(a.num) - Number(b.num));
    return newPokemons;
  case "numDesc":
    newPokemons = data.sort((a, b) => Number(b.num) - Number(a.num));
    /*console.log("num descendente", newPokemons);*/
    return newPokemons;
  default:
    return data;
  }
};
