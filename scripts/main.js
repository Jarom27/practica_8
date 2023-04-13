import pokemon_data from "./data.js";

const $contenedor = document.getElementById("contenedor");
function renderizarAtaques(pokemon,id){
    let $listado_ataques = document.getElementById(`listado-ataques${id}`);
    let $fragment = document.createDocumentFragment();
    let ataques = [];
    pokemon["moves"].forEach(ataque => {
        ataques.push(ataque["move"].name)
    });
    console.log(ataques)
    ataques.forEach(ataque=>{
        let $li = document.createElement("li");
        $li.className = "list-group-item";
        $li.innerHTML = ataque;
        $fragment.appendChild($li);
    })
    $listado_ataques.appendChild($fragment);
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
            <ul class="list-group">
                <li class="fw-bold list-group-item">Nombre <span class = "fw-normal">${pokemon.name}</span> </li>
                <li class="fw-bold list-group-item">Peso: <span class = "fw-normal">${pokemon.weight}</span></li>
                <li class="fw-bold list-group-item">Altura: <span class="fw-normal">${pokemon.height}</span></li>
                <li class="fw-bold lh-lg list-group-item" data-bs-toggle="collapse" data-bs-target="#listado-ataques${id}" aria-expanded="false" aria-controls="listado-ataques${id}">
                    <h4>Ataques</h4>
                    <ul class="list-group collapse" id="listado-ataques${id}">
                    </ul>
                </li>
                <li class="fw-bold list-group-item">Areas donde encontrarlo:<span class ="fw-normal"> ${getLocation(location_areas)}</span> </li>
            </ul>
        </div>
    `
    $contenedor.appendChild(card);
    renderizarAtaques(pokemon,id)
}
newCard(1)
newCard(4)
