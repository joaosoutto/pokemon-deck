export const getPokemons = (filter = '') => {
  return fetch(`https://api.pokemontcg.io/v1/cards?name=${filter}`)
    .then((response) => response.json())
    .catch((err) => console.log(err.message));
};
