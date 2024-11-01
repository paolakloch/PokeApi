async function displayPokemons() {
    displayLoadingMessage();
    try {
        const pokemons = await fetchAllPokemons();
        updatePokemonList(pokemons);
    } catch (error) {
        displayError('Erro ao carregar Pokémon.');
    }
}

function nextPage() {
    offset += limit;
    displayPokemons();
}

function previousPage() {
    if (offset > 0) {
        offset -= limit;
        displayPokemons();
    }
}

// Event listeners
document.getElementById('nextPage').addEventListener('click', nextPage);
document.getElementById('prevPage').addEventListener('click', previousPage);

document.getElementById('fetchPokeName').addEventListener('click', async () => {
    const pokemonName = document.getElementById('inputPokeName').value;
    try {
        const data = await fetchData(pokemonName);
        updatePokemonList([data]);
    } catch (error) {
        displayError('Pokémon não encontrado.');
    }
});

function refreshPage() {
    window.location.reload();
}

// Initial call to display Pokémon
displayPokemons();
