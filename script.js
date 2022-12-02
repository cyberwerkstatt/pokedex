
// first function created


async function loadPokemon(){
    let pokemon = document.getElementById("input").value;
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let response = await fetch(url);
    let responseAsJSON = await response.json();
    let pokePic = responseAsJSON["sprites"]["other"]["official-artwork"]["front_default"]
    let name = responseAsJSON["name"];
    let pokeContainer = document.getElementById("container");
    pokeContainer.innerHTML = `
        <div class="pokeName">
            <h2>Name: ${name.toUpperCase()}</h2>
        </div>
        <img src="${pokePic}">
    `;
    loadStats(responseAsJSON);
    document.getElementById("input").value = "";
}

function loadStats(pokemon_stats){
    removeColorClasses();
    let type = pokemon_stats["types"][0]["type"]["name"]
    let stats = pokemon_stats["stats"];
    let stats_container = document.getElementById("stats");
    stats_container.innerHTML = `Type: ${type}`;
    addColorClasses(pokemon_stats);

    console.log(stats)
}

function addColorClasses(pokemon_stats){
    stats_container = document.getElementById("stats");
    type = pokemon_stats["types"][0]["type"]["name"];
    if(type == "fire"){
        stats_container.classList.add("red");
    } else if (type == "water") {
        stats_container.classList.add("blue")
    } else if (type == "grass") {
        stats_container.classList.add("green")
    } else if (type == "psychic") {
        stats_container.classList.add("psych")
    } else if (type == "electric") {
        stats_container.classList.add("yellow")
    } else if (type == "rock") {
        stats_container.classList.add("stone")
    }
}

function removeColorClasses(){
    let colors = ["red", "blue", "yellow", "green", "psych", "stone"];
    for (let i = 0; i < colors.length; i++) {
        let color = colors[i];
        document.getElementById("stats").classList.remove(color);
    }
}

