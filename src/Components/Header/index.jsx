import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { Container, PrimaLogo } from "./styled";
import Logo from "../../img/PokemonLogo.png"
import Pikachu from "../../img/PikachuLogo.png"
import { Button, ButtonGroup } from '@chakra-ui/react'

function Header() {
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <PrimaLogo src={Pikachu} alt="Pikachu" />
            <img src={Logo} alt="Logo Pokemon" />
            <Button colorScheme='blue' onClick={() => goToPokedexPage(navigate)} >Ver pokedex</Button>

          </>
        );
      case "/pokedex":
        return (
          <>
            <PrimaLogo src={Pikachu} alt="Pikachu" />
            <img src={Logo} alt="Logo Pokemon" />
            <Button colorScheme='blue' onClick={() => goToHomePage(navigate)} >Ver lista de pokemons</Button>

          </>
        );
      case "/details":
        return (
          <>
            <PrimaLogo src={Pikachu} alt="Pikachu" />
            <img src={Logo} alt="Logo Pokemon" />
            <Button colorScheme='blue' onClick={() => goToPokedexPage(navigate)} >Volte para Pokedex</Button>

          </>
        );
      default:
        return (
          <>
            <PrimaLogo src={Pikachu} alt="Pikachu" />
            <img src={Logo} alt="Logo Pokemon" />
            <Button colorScheme='blue' onClick={() => goToHomePage(navigate)}>Voltar para página inicial</Button>
          </>
        );
    }
  };

  return <Container>{renderHeader()}</Container>;
}

export default Header;
