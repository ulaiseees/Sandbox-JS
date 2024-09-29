const urlPokemon = "https://pokeapi.co/api/v2/pokemon"
const listaPokemon = document.querySelector("#lista-pokemon")

fetch(urlPokemon)
    .then(res => res.json())
    .then(data => {
        const pokemons = data.results;
        
        pokemons.forEach(pokemon => {
            const li = document.createElement("li")
            li.innerText = pokemon.name
            listaPokemon.append(li)
        });
    })

