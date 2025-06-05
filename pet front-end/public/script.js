window.onload = async () => {
    //register form submission
    const formButton = document.querySelector("#addPet");
    formButton.onclick = formHandler;

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

async function formHandler(event) {
    //stop the regular behavior of the button (form submission)
    event.preventDefault();

    //gather up the form data
    const formData = {
        petName: document.querySelector("#petName").value,
        petDescription: document.querySelector("#petDescription").value
    }

    //make the post request
    const url = "http://localhost:3000/api/v1/pets";
    const config = {
        method: "post",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }

    const response = await fetch(url, config);
    const data = await response.json();
    
    console.log(response);
    console.log(data);

    //handle the response
    const playpen = document.querySelector(".playpen");
    const firstPet = playpen.firstElementChild;

    const petSection = createPetCard(data);
    petSection.style.backgroundColor = "lightgreen";
    playpen.insertBefore(petSection, firstPet);
}

function showPets(pets) {
    const playpen = document.querySelector(".playpen");
    let html = "";
    for (const pet of pets) {
        // const card = createPetCard(pet);
        // playpen.appendChild(card);

        html += `
            <section class="card">
                <h2>${pet.petName}</h2>
                <p>Description: ${pet.petDescription}</p>
            </section>`;
    }
    playpen.innerHTML = html;
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