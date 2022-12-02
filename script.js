
// first function created


async function loadPokemon(){
    let pokemon = document.getElementById("input").value;
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let response = await fetch(url);
    let responseAsJSON = await response.json();
    let pokePic = responseAsJSON["sprites"]["other"]["official-artwork"]["front_default"]
    
    let pokeContainer = document.getElementById("container");
    pokeContainer.innerHTML = `
        <div><h1>${responseAsJSON["name"]}</h1></div>
        <img src="${pokePic}">
    `;

    loadStats(responseAsJSON);
    pokemon.value = "";
}

function loadStats(pokemon_stats){
    let type = pokemon_stats["types"][0]["type"]["name"]
    let stats_container = document.getElementById("stats");
    stats_container.innerHTML += type;
    console.log(pokemon_stats)
}