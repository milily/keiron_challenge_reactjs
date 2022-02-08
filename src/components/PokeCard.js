import React, { Fragment, useEffect, useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from "axios";

const PokeCard = ({pokename}) => {

    const [pokeInfo, setPokeInfo] = useState([])


    useEffect(()=>{
        const singlePokeInfo = () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
                .then((response) => {
                    const apiresponse = response.data;
                    setPokeInfo(apiresponse);
                    console.log("pokecard",apiresponse)
                }
            )
        }
        singlePokeInfo()
    },[])


    return(
        <Fragment>
            <Card sx={{backgroundColor: '#edf5f9', borderRadius: '14px', border: '3px solid #ffdd56' }}>
                <CardActionArea>
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            sx={{ fontSize: 14, fontFamily: 'Monospace' }} 
                            color="text.secondary" 
                            component="div">
                            
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
                            
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Fragment>
    )
}

export default PokeCard