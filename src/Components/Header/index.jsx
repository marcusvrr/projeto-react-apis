import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { Container, PrimaLogo, StyledButton } from "./styled";
import { Button } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Logo from "../../img/PokemonLogo.png"
import Pikachu from "../../img/PikachuLogo.png"
import { GlobalContext } from "../../Global/GlobalContext";
import ModalCard from "../Modal/ModalCard";
import axios from "axios";


function Header({ pokemon }) {
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const params = useParams();

  const context = useContext(GlobalContext)
  const { addPokedex, removePokemon, pokedex, setIsOpen, setFlow, } = context

  const botaoAddRemove = pokedex.find((pok)=>{
    return pok.name===params.pokemon
  })
  const [detailPokemon,setDetailPokemon] = useState([])

  const getDetails = async()=>{
      try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}
          `)
          const pokemon = response.data
          if (pokemon.types.length<=1) {
              setDetailPokemon({
                  id: pokemon.id,
                  name: pokemon.name,
                  type1: pokemon.types[0].type.name,
                  img:pokemon.sprites.other['official-artwork']['front_default']
              })
          } else {
              setDetailPokemon({
                  id: pokemon.id,
                  name: pokemon.name,
                  type1: pokemon.types[0].type.name,
                  type2: pokemon.types[1].type.name,
                  img:pokemon.sprites.other['official-artwork']['front_default']
              })
          }
      } catch (error) {
          console.log(error);
      }
  }
  useEffect(()=>{getDetails()},[])

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
            <StyledButton variant='ghost' onClick={() => goToHomePage(navigate)} ><ChevronLeftIcon />Todos Pokemons</StyledButton>
            <img src={Logo} alt="Logo Pokemon" />
            <PrimaLogo src={Pikachu} alt="Pikachu" />

          </>
        );
      case `/details/${params.pokemon}`:
        return (
          <>
            <StyledButton variant='ghost' onClick={() => goToHomePage(navigate)} ><ChevronLeftIcon />Todos Pokemons</StyledButton>
            <img src={Logo} alt="Logo Pokemon" />
            {botaoAddRemove ? (
              <Button colorScheme='red'
                onClick={() => {
                  setFlow(2);
                  setIsOpen(true);
                  removePokemon(detailPokemon);
                }}
              >
                Excluir
              </Button>
            ) : (
              <Button colorScheme='blue'
                onClick={() => {
                  setFlow(1);
                  setIsOpen(true);
                  addPokedex(detailPokemon);
                }}
              >
                Capturar!
              </Button>
            )}

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

  return <Container>{renderHeader()}<ModalCard /></Container>;
}

export default Header;
