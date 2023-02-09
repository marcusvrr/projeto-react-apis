import { useContext } from "react";
import Details from "../../Components/Details/Detail.js";
import Header from "../../Components/Header/index.jsx";
import { GlobalContext } from "../../Global/GlobalContext.js";
import { Container, ContentCard } from "./PokemonListStyle.js";

function PokemonListPage() {
  const context = useContext(GlobalContext)
  const {pokemons} = context

  const urlPokemon = pokemons.map((pokemon,index)=>{
    return <Details key={index} url={pokemon.url} />
  })


  return (
    <Container>
      <Header />
      <h1>Lista de Pokemons</h1>
      <section>{urlPokemon}</section>
        
    </Container>
  );
}
export default PokemonListPage;