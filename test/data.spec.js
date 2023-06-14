import { filterByType, searchPokemonByName, sortData } from '../src/data.js';


describe('test unitarios de filterByType', () => {
  const pokemonArray = [
    {name: "pikachu", type: ["electric"]},
    {name: "togetic", type: ["fairy", "flying"]},
    {name: "chinchou", type: ["water", "electric"]}, 
    {name: "cleffa", type:["fairy"]}, 
  ];

  it('validar el filtro por tipo electric', () => { 

    expect(filterByType(pokemonArray, "electric")).toEqual([
      {name: "pikachu", type: ["electric"]}, 
      {name: "chinchou", type: ["water", "electric"]}]);
  });

  it('validar el filtro por tipo fairy', () => { 

    expect(filterByType(pokemonArray, "fairy")).toEqual([
      {name: "togetic", type: ["fairy", "flying"]}, 
      {name: "cleffa", type:["fairy"]}]);
  });

  it('validar el filtro por tipo inexistente', () => { 

    expect(filterByType(pokemonArray, "inexistente")).toEqual([ 

    ]);
  });
});


describe('test unitarios de searchPokemonByName', () => {
  const pokemonArray = [
    {name: "suicune", num: "245"},
    {name: "caterpie", num: "010"},
    {name: "charizard", num: "006"},
    {name: "tangela", num: "114"},
  ];

  it('validar búsqueda por nombre o número', () => {
    expect(searchPokemonByName(pokemonArray, "suicune","245" )).toEqual(
      [{name: "suicune", num: "245"}]);
  });

  it('validar búsqueda por nombre en mayúsculas', () => {
    expect(searchPokemonByName(pokemonArray, "TANGELA")).toEqual(
      [{name: "tangela", num: "114"}]);
  });

  it('validar búsqueda con espacios al inicio', () => {
    expect(searchPokemonByName(pokemonArray, "   114")).toEqual(
      [{name: "tangela", num: "114"}]);
  });
  
  it('validar búsqueda por número', () => {
    expect(searchPokemonByName(pokemonArray, "1")).toEqual(
      [{name: "caterpie", num: "010"},
        {name: "tangela", num: "114"}
      ]);
  });

  it('validar búsqueda por signos', () => {
    expect(searchPokemonByName(pokemonArray, "#")).toEqual([]);
  });
});


describe('test unitarios de sortData', () => {
  const pokemonArray = [
    {name: "abra", num: "063"},
    {name: "zubat", num: "041"},
    {name: "charizard", num: "006"},
    {name: "celebi", num: "251"},
  ];

  it('validar el filtro por ascending by name', () => { 

    expect(sortData(pokemonArray, "asc")).toEqual([
      {name: "abra", num: "063"},
      {name: "celebi", num: "251"},
      {name: "charizard", num: "006"},
      {name: "zubat", num: "041"},
    ]);
  });

  it('validar el filtro por descending by name', () => { 

    expect(sortData(pokemonArray, "desc")).toEqual([
      {name: "zubat", num: "041"},
      {name: "charizard", num: "006"},
      {name: "celebi", num: "251"},
      {name: "abra", num: "063"},
    ]);
  });

  it('validar el filtro por ascending by number', () => { 

    expect(sortData(pokemonArray, "numAsc")).toEqual([
      {name: "charizard", num: "006"},
      {name: "zubat", num: "041"},
      {name: "abra", num: "063"},
      {name: "celebi", num: "251"},
    ]);
  });

  it('validar el filtro por descending by number', () => { 

    expect(sortData(pokemonArray, "numDesc")).toEqual([
      {name: "celebi", num: "251"},
      {name: "abra", num: "063"},
      {name: "zubat", num: "041"},
      {name: "charizard", num: "006"},
    ]);
  });
});