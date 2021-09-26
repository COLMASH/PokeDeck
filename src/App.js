import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import callPokemon from "./callApi";

function App() {
  let [pokemons, setPokemons] = useState("");
  async function info(id) {
    let { data } = await callPokemon(id);
    return data;
  }

  async function callPokemons(number) {
    let pokemonList = [];
    for (let i = 1; i <= number; i++) {
      pokemonList.push(await info(i));
    }
    return pokemonList;
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await callPokemons(20);
      setPokemons(data);
    };
    fetchData();
  }, []);

  console.log(pokemons);

  return (
    <div className="App">
      <h1>POKEDECK</h1>
      <div>
        {!!pokemons &&
          pokemons.map((pokemon) => (
            <div className="deck" key={pokemon.name}>
              <img alt={pokemon.name} src={pokemon.sprites.front_default}></img>
              <p>{`#${pokemon.id.toString().padStart(3, 0)}`}</p>
              <p>{pokemon.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
