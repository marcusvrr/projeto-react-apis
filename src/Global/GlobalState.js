import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../Constants/url";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {

    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [flow, setFlow] = useState(1);

    const handlePokemons = async () => {
        try {
            const response = await axios.get(BASE_URL)

            setPokemons(response.data.results);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => { handlePokemons() }, [loading])


    const addPokedex = (pokemon) => {
        setLoading(true)
        const filterPokedex = pokedex.find((pokemonInPokedex) =>
            pokemonInPokedex.name === pokemon.name);
        if (!filterPokedex) {
            const newPokedex = [...pokedex, pokemon]
            setPokedex(newPokedex);
        }
        setFlow(1);               
    };
    const removePokemon = (pokemonRemove) => {
        const newPokedex = pokedex.filter(
            (pokemonInPokedex) => pokemonInPokedex.name !== pokemonRemove.name
        );
        setPokedex(newPokedex);
        const newPokelist = [...pokemons];

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
        addPokedex,
        removePokemon,
        pokedex,
        setPokedex,
        isOpen,
        setIsOpen,
        flow,
        setFlow
    }



    return (
        <GlobalContext.Provider value={data}>
            {props.children}

        </GlobalContext.Provider>
    )
}
export default GlobalState;