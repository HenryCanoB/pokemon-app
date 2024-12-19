export const obtenerPokemon = async (pokemon) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const resp = await fetch(url);

  const result = await resp.json();

  console.log(result);

  const pokemons = {
    name: result.name,
    id: result.id,
    imgSrc: result.sprites.front_default,
    hp: result.stats[0].base_stat,
    attack: result.stats[1].base_stat,
    defense: result.stats[2].base_stat,
    type: result.types[0].type.name,
  };

  console.log(pokemons);

  return pokemons;
};
