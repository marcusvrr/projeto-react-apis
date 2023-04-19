import { useContext } from "react";
import Header from "../../Components/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { Container, ContainerCard, Title } from "./PokedexStyle";
import { GlobalContext } from "../../Global/GlobalContext";
import { getColors } from "../../util/card-color";

function PokedexPage() {

  const context = useContext(GlobalContext)
  const {pokedex} = context;

  return (
    <>
      <Header />
      <Container>
        <Title>
        <h1>Meus Pokémons</h1>
        </Title>
        <ContainerCard>
        {pokedex
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map((detailPokemon) => {
          return (
            <PokemonCard key={detailPokemon.name}
            detailPokemon={detailPokemon}
            id={detailPokemon.id} 
            name={detailPokemon.name} 
            type1={detailPokemon.type1} 
            type2={detailPokemon.type2} 
            img={detailPokemon.img}
            cardColor={getColors(detailPokemon.type1)}
            />
          )
        })}
        </ContainerCard>
      </Container>
    </>
  );
}

export default PokedexPage;