import schema from './../models/pet.model.js';

export const getAllPets = async (req, res) => {
    const pets = await schema.findAll();

    res.status(200).json(pets);
}

export const addPet = async (req, res) => {
    const { petName, petDescription } = req.body;
    const newlyAddedPet = await schema.create({ petName, petDescription });

    res.status(201).json(newlyAddedPet);
}

export const updatePet = (req, res) => {
    
}

export const deletePet = (req, res) => {
    
}