import React from "react";
import CardMedia from '@mui/material/CardMedia';

const PokeSprite = ({urlSprite}) =>{
    return(
        <CardMedia
            component="img"
            image={urlSprite?.other?.home?.front_default}
            alt="green iguana"
        />
    )
}

export default PokeSprite