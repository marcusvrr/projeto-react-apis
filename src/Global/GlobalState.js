import { filter } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../Constants/url";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {

    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    // const [isOpen, setIsOpen] = useState(false);
    // const [flow, setFlow] = useState(1);

    const handlePokemons = async () => {
        try {
            const response = await axios.get(BASE_URL)
            setPokemons(response.data.results);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => { handlePokemons() }, [pokemons])


    const filterPokedex = (poke) => {
        const filterPokemon = pokemons.filter((pokemons) => pokemons.name !== poke.name);
        setPokemons(filterPokemon);
        console.log(filterPokemon);
    };

    const addPokedex = (pokemon) => {
        const filterPokedex = pokedex.find((pokemonInPokedex) =>
            pokemonInPokedex.name === pokemon.name);
        if (!filterPokedex) {
            const newPokedex = [...pokedex, pokemon]
            const savePokedex = JSON.stringify(newPokedex);
            localStorage.setItem("pokedex", savePokedex);
            setPokedex(newPokedex);
        }
        const pokeFilter = pokemons.filter((poke) => poke.name !== pokemon.name);
        setPokemons(pokeFilter)
    };
    const removePokemon = (pokemonRemove) => {
        console.log(pokemonRemove);
        const newPokedex = pokedex.filter(
            (pokemonInPokedex) => pokemonInPokedex.name !== pokemonRemove.name
        );
        setPokedex(newPokedex);
        const newPokelist = [...pokemons];

        const savePokedex = JSON.stringify(newPokedex)
        localStorage.setItem("podedex", savePokedex)
        setPokemons(newPokelist)
    }

    useEffect(() => {
        const retornaPokemon = localStorage.getItem("pokedex");
        if (retornaPokemon) {
            const arrayPokemon = JSON.parse(retornaPokemon)
            setPokedex(arrayPokemon);
        }
        handlePokemons()
    }, [])

    const data = {
        pokemons,
        filterPokedex,
        addPokedex,
        removePokemon,
        pokedex,
        setPokedex
    }



    return (
        <GlobalContext.Provider value={data}>
            {props.children}

        </GlobalContext.Provider>
    )
}
export default GlobalState;