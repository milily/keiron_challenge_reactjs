import React from "react";
//MUI Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Chip from '@mui/material/Chip';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PokeModal = ({open, close, abilities, urlSprite, weight, height}) => {

    return (
        <div>
            <Modal
                open={open}
                onClose={close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            <img
                                width={'200'}
                                src={urlSprite.back_default}
                                alt={'pokemon'}/>
                            <img
                                width={'200'}
                                src={urlSprite.front_default}
                                alt={'pokemon'}/>
                            
                        </div>
                        <Grid container sx={{ justifyContent: 'space-around' }}>
                            <Grid item >
                                <Typography 
                                    sx={{fontFamily: 'Monospace'}} 
                                    variant="h6">
                                    Peso: 
                                </Typography>
                                <Typography 
                                    gutterBottom 
                                    sx={{ fontSize: 15, fontFamily: 'Monospace', textTransform: 'capitalize' }} 
                                    color="text.secondary" >
                                    {weight/10} Kg
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography 
                                    sx={{fontFamily: 'Monospace'}} 
                                    variant="h6">
                                    Altura: 
                                </Typography>
                                <Typography 
                                    sx={{ fontSize: 15, fontFamily: 'Monospace', textTransform: 'capitalize' }} 
                                    color="text.secondary">
                                    {height/10} mt
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography 
                                    id="modal-modal-title" 
                                    variant="h6" 
                                    fontFamily="Monospace" >
                                    Habilidades:
                                </Typography>
                                <Typography 
                                    component={'span'} 
                                    variant="body2" 
                                    color="text.secondary">
                                    {abilities.map((ability,index) =>{
                                        return (
                                            <Chip 
                                                key={index} 
                                                style={{ marginTop: 5}} 
                                                label={ability.ability.name} 
                                                size="small" 
                                                color="success" 
                                                variant="outlined"
                                                />
                                            )
                                        })
                                    }
                                </Typography>
                            </Grid>
                        </Grid>
                        
                        
                        
                        
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default PokeModal