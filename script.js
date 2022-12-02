
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
    let type = pokemon_stats["types"][0]["type"]["name"]
    let stats = pokemon_stats["stats"];
    let stats_container = document.getElementById("stats");
    stats_container.innerHTML = `<p>Type: ${type}</p>`;
    console.log(stats)

}