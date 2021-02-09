export const getPokemons = () => {
  return fetch('https://api.pokemontcg.io/v2/cards')
    .then((response) => response.json())
    .catch((err) => console.log(err.message));
};
