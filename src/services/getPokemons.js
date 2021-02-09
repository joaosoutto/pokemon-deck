export const getPokemons = () => {
  return fetch('https://api.pokemontcg.io/v1/cards')
    .then((response) => response.json())
    .catch((err) => console.log(err.message));
};
