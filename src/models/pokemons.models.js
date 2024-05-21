import fetch from 'node-fetch';

const getPokemons = async () => {
    try {
        const res = await fetch(process.env.POKE_API+'?limit=100');
        const json = await res.json();
        console.log(json);
        return json
    } catch(err){
        console.error(err)
        return err
    }
}

const getPokemonById = async (id) => {
    try {
        const res = await fetch(process.env.POKE_API+id);
        const json = await res.json();
        console.log(json);
        return json
    } catch(err){
        console.error(err)
        return err
    }
}

export default {
    getPokemons,
    getPokemonById
}