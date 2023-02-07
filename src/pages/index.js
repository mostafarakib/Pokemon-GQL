import classes from "../styles/pokemons.module.css";
import logo from "../images/Logo.png";
import leftImage from "../images/Left.png";
import Image from "next/image";
import Pokemon from "@/components/pokemon";
import layoutImage1 from "../images/Image03.png";
import layoutImage2 from "../images/Image04.png";
import layoutImage3 from "../images/Image02.png";
import layoutImage4 from "../images/Image05.png";
import layoutImage5 from "../images/Image01.png";
import { useState } from "react";

export const getStaticProps = async () => {
  const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        url
        name
        image
      }
    }
  }`;

  const gqlVariables = {
    limit: 10,
    offset: 1,
  };

  const data = await fetch("https://graphql-pokeapi.graphcdn.app/", {
    credentials: "omit",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: gqlQuery,
      variables: gqlVariables,
    }),
    method: "POST",
  }).then((res) => res.json());

  const allPokemons = await data;

  return {
    props: { allPokemons },
  };
};

function HomePage({ allPokemons }) {
  const pokemons = allPokemons.data.pokemons.results;
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState("");
  // console.log(pokemons);

  const pokemonIdHandler = (id) => {
    const selectedPokemonUrl = `/${id}`;
    setSelectedPokemonUrl(selectedPokemonUrl);
  };
  return (
    <>
      <div className={classes.pokemonContainer}>
        <div className={classes.pokemonBackgroundLayerContainer}>
          <Image className={classes.logo} src={logo} alt="logo" />
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-5 mt-2">
              {pokemons.map((pokemon) => (
                <Pokemon
                  key={pokemon.id}
                  url={pokemon.url}
                  pokemon={pokemon}
                  pokemonIdHandler={pokemonIdHandler}
                  selectedPokemonUrl={selectedPokemonUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.blogContainer}>
        <div className={classes.animatedImageContainer}></div>
        <div className=" w-75">
          <div className={classes.blogHeadline}>
            <h1>
              Ash & Pikachu Arrive in <br /> Pokémon Universe
            </h1>
          </div>
          <div className={classes.parent}>
            <div className={classes.div1}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco quis
                nostrud exercitation ullamco
              </p>
            </div>
            <div className={classes.div2}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute
              </p>
            </div>
            <div className={classes.div3}>
              <Image src={layoutImage1} alt="layout image" />
            </div>
            <div className={classes.div4}>
              <Image src={layoutImage2} alt="layout image" />
            </div>
            <div className={classes.div5}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            </div>
            <div className={classes.div6}>
              <Image src={layoutImage3} alt="layout image" />
            </div>
            <div className={classes.div7}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
            </div>
            <div className={classes.div8}>
              <Image src={layoutImage4} alt="layout image" />
            </div>
            <div className={classes.div9}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute
              </p>
            </div>
            <div className={classes.div10}>
              <Image src={layoutImage5} alt="layout image" />
            </div>
            <div className={classes.div11}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              </p>
            </div>
            <div className={classes.div12}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat
              </p>
            </div>
            <div className={classes.div13}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.animatedImageContainer}></div>
      </div>
    </>
  );
}

export default HomePage;
