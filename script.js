
async function loadPokemon(){
    let pokemon = document.getElementById("input").value;
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let response = await fetch(url);
    let responseAsJSON = await response.json();
    let pokePic = responseAsJSON["sprites"]["other"]["official-artwork"]["front_default"]
    let name = responseAsJSON["name"];
    let type = responseAsJSON["types"][0]["type"]["name"]
    let pokeContainer = document.getElementById("container");
    pokeContainer.innerHTML = pokeContainerHTML(name,type,pokePic);
    loadStats(responseAsJSON);
    document.getElementById("input").value = "";
}

function pokeContainerHTML(name,type,pokePic){
    return `
    <div class="pokeName">
        <h2>Name: ${name.toUpperCase()}</h2>
        <h3>Type: ${type}</h3>
    </div>
    <img src="${pokePic}">
`
}

function loadStats(pokemon_stats){
    removeColorClasses();
    renderStatsContainer();
    let stats = pokemon_stats["stats"];
    let stats_container = document.getElementById("stats");
    addColorClasses(pokemon_stats);

    for (let i = 0; i < stats.length; i++) {
        let stat_value = stats[i]["base_stat"];
        let stat_name = stats[i]["stat"]["name"]
        document.getElementById("stats-container").innerHTML += statsContainerHTML(stat_name,stat_value);
    }
}

function statsContainerHTML(stat_name,stat_value){
    return `
    <div id="allStats" class="allStats">
        <div class="detailStats">
            ${stat_name}:
            ${stat_value}
        </div>
        <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" aria-label="Default striped example" style="width: ${stat_value}%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
        </div>



      

        
    </div>`;
}

function addColorClasses(pokemon_stats){
    stats_container = document.getElementById("stats");
    type = pokemon_stats["types"][0]["type"]["name"];
    if(type == "fire"){
        stats_container.classList.add("red");
        document.getElementById("stats-container").classList.add("red")
    } else if (type == "water") {
        stats_container.classList.add("blue")
        document.getElementById("stats-container").classList.add("blue")
    } else if (type == "grass") {
        stats_container.classList.add("green")
        document.getElementById("stats-container").classList.add("green")
    } else if (type == "psychic") {
        stats_container.classList.add("psych")
        document.getElementById("stats-container").classList.add("psych")
    } else if (type == "electric") {
        stats_container.classList.add("yellow")
        document.getElementById("stats-container").classList.add("yellow")
    } else if (type == "rock") {
        stats_container.classList.add("stone")
        document.getElementById("stats-container").classList.add("stone")
    }
}

function removeColorClasses(){
    let colors = ["red", "blue", "yellow", "green", "psych", "stone"];
    for (let i = 0; i < colors.length; i++) {
        let color = colors[i];
        document.getElementById("stats").classList.remove(color);
        document.getElementById("stats-container").classList.remove(color);
    }
}

function renderStatsContainer(){
    document.getElementById("stats-container").innerHTML = "";
}
