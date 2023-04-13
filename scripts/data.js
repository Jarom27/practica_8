const getPokemonById = async (id)=>{
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    let pokemon_json = await response.json();
    return pokemon_json;
}
const getLocationAreasEncountersById = async (id)=>{
    let response1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`);
    let location_area_json = await response1.json();
    return location_area_json;
}
export default{
    getPokemonById,getLocationAreasEncountersById
}