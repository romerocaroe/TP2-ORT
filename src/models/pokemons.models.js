import fetch from 'node-fetch';

const getPokemons = async () => {
    try {
        const res = await fetch(process.env.POKE_API+'?limit=100')
        const json = await res.json().results.map(pokemon => pokemon.name)
        console.log(json)
        return json
    } catch(err){
        console.error(err)
        return err
    }
}

const getPokemonById = async (id) => {
    try {
        const res = await fetch(process.env.POKE_API+id)
        const json = await res.json()
        const pokemon = {
            "id": json.id,
            "nombre": json.name,
            "altura": json.height,
            "peso": json.weight
        }
        console.log(pokemon);
        return pokemon
    } catch(err){
        console.error(err)
        return err
    }
}

export default {
    getPokemons,
    getPokemonById
}