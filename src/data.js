// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

/**
 * funcion generica que puede filtrar lo que quiera
 * la función recibe dos parametros, el primero es un array de objetos(data) y
 * el segundo un tipo de elemento (condicion)
 */ 
export function filterByType(arrayObjeto, elementTypeDelObjeto) { 
  //filter() regresa un arreglo y recibe una función. Antes de la flechita es el parametro recibido, después es el cuerpo de mi función
  // el parametro es un elemento de mi arrayObjeto
  const pokemon = arrayObjeto.filter(objeto => objeto.type.includes(elementTypeDelObjeto));
  return pokemon;
}

//se utilizó el método startsWith() y un or. 
export const searchPokemonByName = (arrayObjeto, input) => {
  const pokemon = arrayObjeto.filter(objeto => objeto.name.startsWith(input.toLowerCase()) || objeto.num === input);
  return pokemon;
};
