import { useRouter } from "next/router";

const PokemonDetails = () => {
  const router = useRouter();

  const pokemonId = router.query.pokemonId;
  console.log(pokemonId);
  return <div>this is detailed pokemon</div>;
};

export default PokemonDetails;
