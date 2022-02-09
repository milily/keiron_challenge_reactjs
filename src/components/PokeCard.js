import React, { Fragment, useEffect, useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { CardActionArea } from '@mui/material';
import PokeSprite from "./PokeSprite";
import pokeball from './../assets/pokeball.png'
import axios from "axios";
import '../App.css'

const PokeCard = ({pokename}) => {

    const [pokeInfo, setPokeInfo] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const singlePokeInfo = () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
                .then((response) => {
                    const apiresponse = response.data;
                    setPokeInfo(apiresponse);
                    setIsLoading(false)
                    console.log("pokecard",apiresponse)
                }
            )
        }
        singlePokeInfo()
    },[])

    if(isLoading){
        return(
            <img
                width={'70'}
                src={pokeball}
                alt={'pokemon logo'}
                className="pokeball"
            />
        )
    }

    return(
        <Fragment>
            <Card sx={{backgroundColor: '#edf5f9', borderRadius: '14px', border: '3px solid #ffdd56' }}>
                <CardActionArea>
                    <PokeSprite urlSprite={pokeInfo.sprites}/>
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            sx={{ fontSize: 14, fontFamily: 'Monospace' }} 
                            color="text.secondary" 
                            component="div">
                            #{pokeInfo.id.toString().padStart(3, '0')}
                        </Typography>
                        <Typography 
                            gutterBottom 
                            sx={{ fontSize: 20, fontFamily: 'Monospace', textTransform: 'uppercase' }} 
                            color="text.secondary" 
                            variant="h5" 
                            component="div">
                            {pokename}
                        </Typography>
                        <Typography 
                            component={'span'} 
                            variant="body2" 
                            color="text.secondary">
                            {pokeInfo.types.map((pokeType,index) => {
                                return (
                                    <Chip 
                                        key={index} 
                                        style={{marginRight: 5}} 
                                        label={pokeType.type.name} 
                                        size="small" 
                                        color="primary" 
                                        variant="outlined" />
                                    )
                                })
                            }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Fragment>
    )
}

export default PokeCard