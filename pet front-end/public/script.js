window.onload = async () => {
    //gather our data with a fetch call
    const url = "http://localhost:3000/api/v1/pets";
    const config = {
        method: "get",
        mode: "cors"
    }

    const response = await fetch(url, config);
    const data = await response.json();

    console.log(data);
    showPets(data);
}

function showPets(pets) {
    const playpen = document.querySelector(".playpen");
    const html = "";
    for (const pet of pets) {
        // const card = createPetCard(pet);
        // playpen.appendChild(card);

        html += `
            <section class="card">
                <h2>${pet.petName}</h2>
                <p>Description: ${pet.petDescription}</p>
            </section>`;
    }
    playpen.html = html;
}

function createPetCard(pet) {
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    section.className = "card";
    h2.textContent = pet.petName;
    p.textContent = pet.petDescription

    section.appendChild(h2);
    section.appendChild(p);

    return section;
}