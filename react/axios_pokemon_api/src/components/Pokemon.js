import { useState, useEffect } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import axios from "axios";


export const Pokemon = (props) => {
    const [pokemonList, setPokemonList] = useState([]);
    const GetPokemon = () => {
            axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then((response) => {setPokemonList(response.data.results);})
            .catch((err) => {console.log(err)})
    };
    return (
        <Box>
            <Button onClick={GetPokemon} variant="outlined">
                Fetch Pokemon
            </Button>
            <List>
                {pokemonList.map((pokemon, pokemonIdx) => {
                    return (
                        <>
                            <ListItem style={{textAlign:'center'}}>
                                <ListItemText key={pokemonIdx} primary={pokemon.name} />
                            </ListItem>
                            <Divider />
                        </>
                    );
                })}
            </List>
        </Box>
    );
};