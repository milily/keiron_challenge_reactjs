import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./PokeCard";
import PokeSearch from './PokeSearch'
import Grid from '@mui/material/Grid';

const PokeHome = () => {
    const [pokeData, setPokeData] = useState([])
    const [pokecard, setPokecard] = useState([])
    
    useEffect(()=>{
        pokeapi()
    },[])

    const pokeapi = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=25')
            .then(response => {
                const apiresponse = response.data
                setPokeData(apiresponse.results)
                setPokecard(apiresponse.results)
            }   
        )
    }

    const filterByPokemonName = (inputData) =>{ 
        const {
            nativeEvent:{
                target:{
                    value
                }
            }
        } = inputData

        const inputFilter = pokeData.filter( contentType => {
            return contentType.name.toLowerCase().includes(value.toLowerCase())
        })

        setPokecard(inputFilter)
    }

    return(
        <Fragment>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item sx={{marginTop: 5}}>
                    <PokeSearch onChangeEvent={filterByPokemonName} /** method prop for Search component*/ />
                </Grid>
                
                <Grid item xs={10}>
                    <Grid container spacing={2}>
                        {
                            pokecard.map((card, index) =>{
                                return(
                                    <Grid style={{marginTop: 40}} item key={index} lg={2} xs={12} md={4} sm={6}>
                                        <PokeCard
                                            container
                                            key={index} 
                                            pokename={card.name}
                                            pokeurl={card.url}>
                                        </PokeCard>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default PokeHome;