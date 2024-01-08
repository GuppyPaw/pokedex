import './index.css'

const PokemonInfo = (props) => {
    const {pokeSprite,pokeSpriteShiny} = props;
    
    return (
        <div className="PokeInfo">
            {pokeSprite ? 
            <>
            <img src={pokeSprite} alt='sprite'/>
            <img src={pokeSpriteShiny} alt='shiny sprite'/>
            </> : 
            
            <>
            <div className='WhosThatPkmn'>?</div>
            <div className='WhosThatPkmn'>Pokémon</div>
            </>
            }
        </div>
    )
}

export default PokemonInfo