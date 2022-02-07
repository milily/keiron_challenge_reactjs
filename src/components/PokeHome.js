import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./PokeCard";

const PokeHome = () => {
    const [pokecard, setPokecard] = useState([])
    
    useEffect(()=>{
        pokeapi()
    },[])

    const pokeapi = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=25')
            .then(response => {
                const apiresponse = response.data
                setPokecard(apiresponse.results)
                console.log(apiresponse.results)
            })
        
    }

   

    return(
        <Fragment>
            {
                pokecard.map((card, index) =>{
                    return(
                        <PokeCard
                            container
                            key={index} 
                            pokename={card.name}
                            pokeurl={card.url}>
                        </PokeCard>
                    )
                })
            }
        </Fragment>
    )
}

export default PokeHome;