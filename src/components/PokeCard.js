import React, { Fragment, useEffect, useState} from "react";
//MUI Components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { CardActionArea } from '@mui/material';
//Components
import PokeSprite from "./PokeSprite";
import PokeModal from './PokeModal'
import pokeball from './../assets/pokeball.png'
//Axios
import axios from "axios";
//Styles
import '../App.css'

const PokeCard = ({pokename}) => {

    const [pokeInfo, setPokeInfo] = useState([])
    const [pokeEvolution, setPokeEvolution] = useState([])

    //Pokemon image loading state
    const [isLoading, setIsLoading] = useState(true)

    //Modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        if(!open){
            setOpen(true)
        }
    };
    const handleClose = () => { setOpen(false) };

    useEffect(()=>{
        let isMounted = true

            const singlePokeInfo = () => 
                axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`)

            const evolutionData = () => 
                axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokename}`)

            Promise.all([singlePokeInfo(),evolutionData()])
                .then(([singlePoke, evolutionPoke])=>{
                    if(isMounted){
                        const pokeDataResponse = singlePoke.data;
                        const pokeEvolutionResponse = evolutionPoke.data;
                        
                        setPokeInfo(pokeDataResponse);
                        setPokeEvolution(pokeEvolutionResponse)
                        setIsLoading(false)
                    }
                } 
            )

        return () => {isMounted = false}
        
    },[pokename])

    //Pokemon image component
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

    const evolvesFromSpecies = pokeEvolution?.evolves_from_species?.name || '---'
    
    return(
        <Fragment>
            <Card sx={{backgroundColor: '#edf5f9', borderRadius: '14px', border: '3px solid #ffdd56' }}>
                <CardActionArea onClick={handleOpen}>
                    <PokeSprite urlSprite={pokeInfo.sprites}/>
                    <PokeModal 
                        open={open} 
                        close={handleClose}
                        abilities={pokeInfo.abilities}
                        urlSprite={pokeInfo.sprites}
                        weight={pokeInfo.weight}
                        height={pokeInfo.height}/>
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
                            gutterBottom 
                            sx={{ fontSize: 11, fontFamily: 'Monospace' }} 
                            color="text.secondary" 
                            variant="h5" 
                            component="div">
                            Evolución anterior: 
                        </Typography>
                        <Typography 
                            gutterBottom 
                            sx={{ fontSize: 14, fontFamily: 'Monospace', textTransform: 'capitalize', marginBottom: 2 }} 
                            color="text.secondary" 
                            component="div">
                            {evolvesFromSpecies}
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