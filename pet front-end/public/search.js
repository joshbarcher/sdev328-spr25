window.onload = async () => {
    //on page load, fill the table initially
    await loadPets();

    const searchBox = document.getElementById('search-input');
    searchBox.addEventListener('input', queryPets);
}

async function loadPets() {
    const response = await fetch("http://localhost:3000/api/v1/pets", { method: "get" });
    const data = await response.json();

    rendersPets(data);
}

function rendersPets(pets) {
    const tbody = document.querySelector("#results-table");
    for (const pet of pets) {
        const row = createRow(pet);
        tbody.innerHTML += row;
    }
}

function createRow(pet) {
    return `<tr>
        <td>${pet.petId}</td>
        <td>${pet.petName}</td>
        <td>${pet.petDescription}</td>
    </tr>`
}

//may want to consider adding a debounce!
function queryPets() {

}

