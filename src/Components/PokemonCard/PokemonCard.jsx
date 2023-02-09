
import {Container , ButtonDetails, CatchButton, Pokeball, Pokemon, PokemonName, PokemonNumber, PokemonType, TypesContainer } from "./PokemonCardStyle"
import pokeball from "../../img/pokebola-background.png";
import { getTypes } from "../../util/pokemon-types";

function PokemonCard({ detailPokemon, id, name, type1, type2, img, cardColor }) {
    return (
<Container color={cardColor}>
      <div>
        <PokemonNumber>{id <= 9 ? `00${id}` : `0${id}`}</PokemonNumber>
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
        <ButtonDetails>Detalhes</ButtonDetails>
      </div>
      <div>
        <Pokemon src={img} alt="" />
        <div>
          <CatchButton color="#FF6262" colorText={"White"}>
            Remover da Pokedex!
          </CatchButton>
        </div>

        <div>
          <CatchButton>Capturar!</CatchButton>
        </div>
      </div>
      <Pokeball src={pokeball} alt="pokeball" />
    </Container>
    )
}


export default PokemonCard
