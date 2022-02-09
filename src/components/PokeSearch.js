import React from "react";
//MUI Components
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({onChangeEvent}) => {
    

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 400, marginTop: 5}}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="filtrar por nombre"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={onChangeEvent}
            />
            <IconButton
                sx={{ p: '10px' }} 
                aria-label="search"
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

export default Search