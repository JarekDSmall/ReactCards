import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import PokemonSelect from "./PokemonSelect";

function PokeDex() {
  const [pokemon, setPokemon] = useState([]);

  const selectPokemon = async (name) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);
      const { id, name: pokemonName, sprites, stats, types } = response.data;

      const newPokemon = {
        id: uuid(),
        name: pokemonName,
        sprite: sprites.front_default,
        hp: stats.find(stat => stat.stat.name === "hp").base_stat,
        types: types.map(type => type.type.name),
        stats: stats.map(stat => ({
          name: stat.stat.name,
          value: stat.base_stat
        }))
      };
      

      setPokemon(pokemon => [...pokemon, newPokemon]);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      
    }
  };

  return (
    <div className="PokeDex">
      <PokemonSelect add={selectPokemon} />  {/* Passing selectPokemon as the add prop */}
      <div className="PokeDex-card-area">
        {pokemon.map((pokeData) => (
          <PokemonCard key={pokeData.id} {...pokeData} />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
