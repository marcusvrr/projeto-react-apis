
import { Container, ButtonDetails, CatchButton, Pokeball, Pokemon, PokemonName, PokemonNumber, PokemonType, TypesContainer, RemoveButton } from "./PokemonCardStyle"
import pokeball from "../../img/pokebola-background.png";
import { getTypes } from "../../util/pokemon-types";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";
import { useContext } from "react";
import { GlobalContext } from "../../Global/GlobalContext";



function PokemonCard({ detailPokemon, id, name, type1, type2, img, cardColor }) {
  const navigate = useNavigate();
  const location = useLocation();

  const context = useContext(GlobalContext)
  const {addPokedex,removePokemon, setIsOpen, flow, setFlow } = context

  return (
    <Container color={cardColor}>
      <div>
        <PokemonNumber>{id <= 9 ? `#00${id}` : `#0${id}`}</PokemonNumber>
        <PokemonName>{name}</PokemonName>
        <TypesContainer>
          {type2 ? (
            <div>
              <PokemonType src={getTypes(type1)} />
              <PokemonType src={getTypes(type2)} />
            </div>
          ) : (
            <PokemonType src={getTypes(type1)} />
          )}
        </TypesContainer>
        <ButtonDetails onClick={() => goToDetailsPage(navigate, name)} >Detalhes</ButtonDetails>
      </div>
      <div>
        <Pokemon src={img} alt={name} />
        {location.pathname === "/pokedex" ? (
          <RemoveButton
            onClick={() => {
              setFlow(2);console.log(flow);             
              setIsOpen(true);
              removePokemon(detailPokemon);
            }}
          >
            Excluir
          </RemoveButton>
        ) : (
          <CatchButton
            onClick={() => {
              setFlow(1);               
              setIsOpen(true);
              addPokedex(detailPokemon);
            }}
          >
            Capturar!
          </CatchButton>
        )}
      </div>
      <Pokeball src={pokeball} alt="pokeball" />
    </Container>
  )
}


export default PokemonCard


