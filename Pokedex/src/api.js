let offset = 0;
const limit = 21;
let pokemons = [];

async function fetchAllPokemons() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        pokemons = await Promise.all(data.results.map(fetchPokemonDetails));
        return pokemons;
    } catch (error) {
        console.error('Fetch error:', error);
        throw new Error('Failed to fetch Pokémon data');
    }
}

async function fetchPokemonDetails(pokemon) {
    const response = await fetch(pokemon.url);
    const pokeData = await response.json();
    return {
        id: pokeData.id,
        name: pokeData.name,
        type: pokeData.types[0].type.name,
        image: pokeData.sprites.front_default
    };
}


async function fetchData(pokemonName) {
    const filteredPokemons = pokemons.filter(poke =>
        poke.name.toLowerCase() === pokemonName.toLowerCase()
    );
    return filteredPokemons[0] || null;
}

// async function fetchData(pokemonName) {
//     try {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
//         if (!response.ok) {
//             throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
//         }
//         return await response.json();
//     } catch (error) {
//         console.error('Fetch error:', error);
//         throw new Error('Pokémon not found');
//     }
// }
