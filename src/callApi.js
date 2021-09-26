import axios from "axios";

export default async function callPokemons(id) {
  return await axios({
    method: "GET",
    baseURL: "https://pokeapi.co/api/v2/pokemon/",
    url: `${id}/`,
  });
}
