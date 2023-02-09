import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../Constants/url";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {

    const [pokemons,setPokemons] = useState([])

    
    const handlePokemons = async() =>{
        try {
            const response = await axios.get(BASE_URL)
            setPokemons(response.data.results);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{handlePokemons()},[])

    const data = {
        pokemons
    }



    return(
        <GlobalContext.Provider value={data}>
            {props.children}
            
        </GlobalContext.Provider>
    )
}
export default GlobalState;