import './index.css'

const PokemonCard = (props) => {

    const {id,name,pokemonSprite,pokemonSpriteShiny,setPokeSpriteShiny,setPokeSprite} = props;

    const handleCardClick = (event) => {
        setPokeSprite(pokemonSprite);
        setPokeSpriteShiny(pokemonSpriteShiny);
    }

    return(
        <div className="PokemonCard" onClick={handleCardClick}>
            <img src={pokemonSprite} alt='sprite'/> <br/>
            {id} <br/>
            {name}
        </div>
    )
}

export default PokemonCard