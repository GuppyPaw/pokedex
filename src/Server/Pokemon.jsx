const URL = 'https://beta.pokeapi.co/graphql/v1beta'

export const getAllPokemon = () => {
    return new Promise((resolve, reject) => {
        fetch(URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                query: `{
                    list: pokemon_v2_pokemon(order_by: {id: asc}, where: {is_default: {_eq: true}}) {
                      name
                      id
                      is_default
                      height
                      pokemon_v2_pokemonspecy {
                        generation_id
                        is_baby
                        is_legendary
                        is_mythical
                        pokemon_v2_evolutionchain {
                          id
                        }
                      }
                      pokemon_v2_pokemontypes {
                        pokemon_v2_type {
                          name
                        }
                      }
                      pokemon_v2_pokemonsprites {
                        sprites
                      }
                    }
                  }`
            })
        })
        .then(response => response.json())
        .then(result => resolve(result))
        .catch(err => reject(err));
    })
}