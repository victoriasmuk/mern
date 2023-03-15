import { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';


export const Pokemon = (props) => {
    const [pokemonList, setPokemonList] = useState([]);
    const getPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setPokemonList(response.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <Box>
            <Button onClick={getPokemon} variant="outlined">
                Fetch Pokemon
            </Button>
            <List>
                {pokemonList.length > 0 && pokemonList.map((pokemon, pokemonIdx) => {
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