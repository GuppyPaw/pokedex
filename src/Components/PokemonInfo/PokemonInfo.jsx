import { useState } from 'react';
import './PokemonInfo.css'
import { Switch, FormControl, FormControlLabel, Chip, ListItem, List } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby, faStar} from '@fortawesome/free-solid-svg-icons';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FlareIcon from '@mui/icons-material/Flare';
import { typeIcons } from '../../data/typeIcons';
import { typeColors } from '../../data/typeColors';

const PokemonInfo = (props) => {
    const {pokeSprite,pokeSpriteShiny,selectedPokemon} = props;
    
    const [shinySelected, setShinySelected] = useState(false);

    const handleSwithChange = () => {
        setShinySelected((prev) => !prev);
    }

    return (
        <div className="PokeInfo">
            {selectedPokemon ? (
                <>
                    <FormControl className='options'>
                        <FormControlLabel control={<Switch onChange={handleSwithChange}/>} label={<AutoAwesomeIcon/>}/>
                    </FormControl>

                    {!shinySelected ? (
                        <img src={pokeSprite} alt='sprite'/>
                    ) : (
                        <img src={pokeSpriteShiny} alt='shiny sprite'/>
                    )}

                    <h1>{selectedPokemon.name.toUpperCase()}</h1>
                    <h4>Gen {selectedPokemon.pokemon_v2_pokemonspecy.generation_id}</h4>
                    {selectedPokemon.pokemon_v2_pokemonspecy.is_baby ? <Chip label={<FontAwesomeIcon icon={faBaby}/>}/>  : <></>}
                    {selectedPokemon.pokemon_v2_pokemonspecy.is_mythical ? <Chip label={<FlareIcon/>}/>  : <></>}
                    {selectedPokemon.pokemon_v2_pokemonspecy.is_legendary ? <Chip label={<FontAwesomeIcon icon={faStar}/>}/>  : <></>}
                    <List>
                    <ListItem>
                        {selectedPokemon.pokemon_v2_pokemontypes.map((typeInfo) => {
                            const type = typeInfo.pokemon_v2_type.name;
                            const chipColor = typeColors[type];

                            return (
                                <Chip 
                                key={type}
                                icon={<FontAwesomeIcon icon={typeIcons[type]} style={{ color: 'white' }} />} 
                                label={type} 
                                style={{ color: 'white', fontWeight: 'bold', backgroundColor: chipColor, marginRight: '5px' }}/>
                            )
                        })}
                    </ListItem>
                    </List>
                </>
            ) : (
                <>
                    <div className='WhosThatPkmn'>?</div>
                    <div className='WhosThatPkmn'>Pokémon</div>
                </>
            )}
        </div>
    )
}

export default PokemonInfo