function updatePokemonList(pokemons) {
    const pokeList = pokemons.map(poke => `
        <li class="pokemon-item" style="display: flex">
            <img src="${poke.image}" alt="${poke.name}" width="100" height="100"> 
            <div>
                <p style="color: grey">nº ${poke.id}</p>
                <p style="font-weight: bold;">${poke.name.toUpperCase()}</p>
                <p id="pokeType" style="background-color: ${getTypeColor(poke.type)}; width: 100px; color: white; border-radius: 10px; text-align: center; font-size: 12px">${poke.type}</p>
                </div>
        </li>
    `).join('');

    document.getElementById('pokeList').innerHTML = pokeList;
}

function getTypeColor(type) {
    switch (type) {
        case 'grass': return '#9bcc50';
        case 'fire': return '#fd7d24';
        case 'water': return '#4592c4';
        case 'bug': return '#729f3f';
        case 'normal': return '#a4acaf';
        case 'poison': return '#b97fc9';
        case 'electric': return '#eed535';
        case 'ground': return '#f7de3f';
        case 'fairy': return '#fdb9e9';
        case 'fighting': return '#d56723';
        case 'psychic': return '#f366b9';
        case 'rock': return '#a38c21';
        case 'ghost': return '#7b62a3';
        case 'ice': return '#51c4e7';
        case 'dragon': return '#0f6ac0';
        default: return '#FFFFFF';
    }
}

function displayLoadingMessage() {
    document.getElementById('pokeList').innerHTML = 'Carregando...';
}

function displayPokemonName(name) {
    document.getElementById('pokeName').innerHTML = `Nome: ${name}`;
}

function displayError(message) {
    document.getElementById('pokeList').innerHTML = `<li>${message}</li>`;
}
