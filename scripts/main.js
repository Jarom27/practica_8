import pokemon_data from "./data.js";

const $contenedor = document.getElementById("contenedor");
function getMoves(pokemon){
    let ataques = [];
    let render_ataques = [];
    pokemon["moves"].forEach(ataque => {
        ataques.push(ataque["move"])
    });
    ataques.forEach(move=>{
        console.log(move.name)
        render_ataques.push(move.name)
    })
    return render_ataques.slice(0,10)
}
function getLocation(location_areas){

    let lugares =[];
    location_areas.forEach(area=>{
        lugares.push(area["location_area"]["name"])
    })
    return lugares;
}
async function newCard(id){
    const pokemon = await pokemon_data.getPokemonById(id);
    const location_areas = await pokemon_data.getLocationAreasEncountersById(id);
    let card = document.createElement("div");
    card.className = "card col-6"
    card.innerHTML= `
        <img class="card-img-top object-fit-cover" src="${pokemon.sprites["other"]["official-artwork"]["front_default"]}" alt="">
        <div class="card-body">
            <h4 class="card-title text-uppercase fs-3 fw-bold">${pokemon.name}</h4>
            <ul class="list">
                <li class="fw-bold">Nombre <span class = "fw-normal">${pokemon.name}</span> </li>
                <li class="fw-bold">Peso: <span class = "fw-normal">${pokemon.weight}</span></li>
                <li class="fw-bold">Altura: <span class="fw-normal">${pokemon.height}</span></li>
                <li class="fw-bold lh-lg">Primeros 10 Ataques: <span class="fw-normal">${getMoves(pokemon)}</span></li>
                <li class="fw-bold">Areas donde encontrarlo:<span class ="fw-normal"> ${getLocation(location_areas)}</span> </li>
            </ul>
        </div>
    `
    $contenedor.appendChild(card);
}
newCard(1)
newCard(2)