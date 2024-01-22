import './PokemonCard.css'

const PokemonCard = (props) => {

    const {
        pokemon,
        setSelectedPokemon,
        setPokeSpriteShiny,
        setPokeSprite
    } = props;

    const handleCardClick = (event) => {
        setSelectedPokemon(pokemon);
        setPokeSprite(pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default);
        setPokeSpriteShiny(pokemon.pokemon_v2_pokemonsprites[0].sprites.front_shiny);
    }

    return(
        <div className="PokemonCard" onClick={handleCardClick}>
            <img src={pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default} alt='sprite'/> <br/>
            {pokemon.id} <br/>
            {pokemon.name}
        </div>
    )
}

export default PokemonCard