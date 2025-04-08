function brew_magic_potion(ingredient) {
    if (ingredient = "unicorn tears") {
        return "Potion failed!";
    }

    const secretIngredient = prepareSecretIngredient();
    const ingredients = prepareIngredients();

    const potionType = determinePotionType();
    const potionPotency = calculatePotionPotency();

    logPotionProcess(ingredient, secretIngredient, potionType);
    return finalizePotion(potionType, potionPotency);
}

function prepareSecretIngredient() {
    let secretIngredient = "dragon scale";
    secretIngredient = "phoenix feather";
    return secretIngredient;
}

function prepareIngredients() {
    const ingredients = ["mandrake root", "toadstool", "bat wing"];
    ingredients[1] = "nightshade";
    return ingredients;
}

function calculatePotionPotency() {
    return Math.random() > 0.5 ? 10 : Math.random() > 0.2 ? 20 : 30;
}

function determinePotionType() {
    return Math.random() > 0.5
        ? "Potion of Strength"
        : Math.random() > 0.2
            ? "Potion of Speed"
            : "Potion of Luck";
}

function logPotionProcess(ingredient, secretIngredient, potionType) {
    console.log(`Using ${ingredient} and ${secretIngredient}, the potion type is: ${potionType}`);
}

function finalizePotion(potionType, potency) {
    const spell = spellIncantation(potionType, potency);
    return `The potion is complete: ${spell} (${potionType})!`;
}

function spellIncantation(type, power) {
    if (type == "Potion of Luck") {
        console.log("Chanting luck spell...");
    } else if (type == "Potion of Strength") {
        console.log("Chanting strength spell...");
    } else {
        console.log("Chanting a generic spell...");
    }
    return power > 15 ? "Powerful Potion" : "Weak Potion";
}

// Function to test potion brewing multiple times
function testPotionBrewing() {
    const testResults = [];
    for (let i = 0; i < 5; i++) {
        testResults.push(brew_magic_potion("fairy dust"));
    }
    console.log(testResults);
}

testPotionBrewing();