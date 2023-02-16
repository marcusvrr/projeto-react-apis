import { useContext } from "react";
import Details from "../../Components/Details/Detail.js";
import Header from "../../Components/Header/index.jsx";
import { GlobalContext } from "../../Global/GlobalContext.js";
import { Container, } from "./PokemonListStyle.js";

function PokemonListPage() {
  const context = useContext(GlobalContext)
  const {pokemons,pokedex} = context

  const filteredPokemon = pokemons.filter(pokemon => !pokedex.find(captured => pokemon.name === captured.name));
  const pokemonListItems = filteredPokemon.map(pokemon => <Details key={pokemon.name} url={pokemon.url} />);


  return (
    <Container>
      <Header />
      <h1>Todos Pokémons</h1>
      <section>{pokemonListItems}</section>
        
    </Container>
  );
}
export default PokemonListPage;