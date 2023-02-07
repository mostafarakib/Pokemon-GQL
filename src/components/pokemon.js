import Link from "next/link";
import { useEffect, useState } from "react";
import classes from "../styles/pokemons.module.css";

function Pokemon({ url, pokemon, pokemonIdHandler, selectedPokemonUrl }) {
  const { id, name, image } = pokemon;
  const [singlePokemon, setSinglePokemon] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSinglePokemon(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="col">
      <Link href={selectedPokemonUrl}>
        <div
          onClick={() => {
            pokemonIdHandler(id);
          }}
          className={classes.pokemonCard}
        >
          <div className={classes.pokemonCardImageContainer}>
            <img
              src={image}
              className={classes.pokemonCardImage}
              alt="pokemon-pic"
            />
            <div className={classes.pokemonIndex}>#{id}</div>
          </div>
          <h6 className="mt-3">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h6>
          {/* {singlePokemon?.types[0] && (
            <button className={classes.pokemonTypeButton}>
              {singlePokemon.types[0].type.name.charAt(0).toUpperCase() +
                singlePokemon.types[0].type.name.slice(1)}
            </button>
          )}
          {singlePokemon?.types[1] && (
            <button className={classes.pokemonTypeButton}>
              {singlePokemon.types[1].type.name.charAt(0).toUpperCase() +
                singlePokemon.types[1].type.name.slice(1)}
            </button>
          )} */}
        </div>
      </Link>
    </div>
  );
}

export default Pokemon;
