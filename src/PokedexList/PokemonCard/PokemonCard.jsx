import { useState } from 'react';
import './PokemonCard.css'

const PokemonCard = (props) => {

    const {
        index,
        pokemon,
        setSelectedPokemon,
        setPokeSpriteShiny,
        setPokeSprite,
    } = props;

    const [selectedPokemonIndex, setSelectedPokemonIndex] = useState(null);

    const handleCardClick = (event) => {
        setSelectedPokemon(pokemon);
        setSelectedPokemonIndex(index);
        setPokeSprite(pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default);
        setPokeSpriteShiny(pokemon.pokemon_v2_pokemonsprites[0].sprites.front_shiny);
    }

    return(
        <div className={`PokemonCard ${selectedPokemonIndex === index ? 'selected' : ''}`} onClick={handleCardClick}>
            <img src={pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default} alt='sprite'/> <br/>
            {pokemon.id} <br/>
            {pokemon.name}
        </div>
    )
}

export default PokemonCard