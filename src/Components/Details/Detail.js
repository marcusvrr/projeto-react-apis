import axios from "axios"
import { useEffect, useState } from "react"
import { getColors } from "../../util/card-color"
import PokemonCard from "../PokemonCard/PokemonCard"
import { ContentCard } from "./styled"


const Details= ({url}) => {
    const [detailPokemon,setDetailPokemon] = useState([])

    const getDetails = async()=>{
        try {
            const response = await axios.get(url)
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

    return(
        <ContentCard>
            <PokemonCard
            detailPokemon={detailPokemon}
            id={detailPokemon.id} 
            name={detailPokemon.name} 
            type1={detailPokemon.type1} 
            type2={detailPokemon.type2} 
            img={detailPokemon.img}
            cardColor={getColors(detailPokemon.type1)}
            />
        </ContentCard>
    )
}
export default Details