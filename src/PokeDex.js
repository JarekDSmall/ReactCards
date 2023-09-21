import React from "react";
import { useAxios } from "./hooks";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

function PokeDex() {
  const [pokemon, addPokemon, clearPokemon] = useAxios("https://pokeapi.co/api/v2/pokemon/");

  const formatPokemonData = (pokeData) => {
    return {
      name: pokeData.name,
      sprite: pokeData.sprites.front_default,
      hp: pokeData.stats.find(stat => stat.stat.name === "hp").base_stat,
      types: pokeData.types.map(typeInfo => typeInfo.type.name),
      stats: pokeData.stats.map(stat => ({
        name: stat.stat.name,
        value: stat.base_stat
      }))
    };
  };

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
        <button onClick={clearPokemon}>Delete the pokemon!</button>
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(pokeData => {
          const formattedData = formatPokemonData(pokeData);
          return <PokemonCard key={pokeData.id} {...formattedData} />;
        })}
      </div>
    </div>
  );
}

export default PokeDex;
