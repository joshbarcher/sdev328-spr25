import schema from './../models/pet.model.js';

export const petQuery = async (req, res) => {
    const { field, query, sortField, sortDirection } = req.query;

    const matches = await schema.findAll({
        where: {
            field: { 
                [Op.like]: `%${query}%`
            }
        }
    })

    if (matches.length === 0) {
        res.status(404).end();
    } else {
        res.status(200).json(matches);
    }   
}

export const getPetById = async (req, res) => {
    const id = req.query.id;
    const pet = await schema.findByPk(id);

    if (pet) {
        res.status(200).json(pet);
    } else {
        res.status(404).json({
            message: "Pet not found!"
        });
    }
}

export const getAllPets = async (req, res) => {
    const pets = await schema.findAll();

    res.status(200).json(pets);
}

export const addPet = async (req, res) => {
    if (!req.body.petName) {
        return res.status(400).send();
    }

    const { petName, petDescription } = req.body;
    const newlyAddedPet = await schema.create({ petName, petDescription });

    res.status(201).json(newlyAddedPet);
}

export const updatePet = async (req, res) => {
    const { petId, petName, petDescription } = req.body;
    const updatedPet = {
        petId,
        petName,
        petDescription
    }

    //pull out the first array value (0 or 1) from the results
    const [ updated ] = await schema.update(updatedPet, {
        where: {
            petId
        }
    })

    if (updated) {
        res.status(200).json(updated);
    } else {
        res.status(404).json({ message: "Not found!" })
    }
}

export const deletePet = async (req, res) => {
    const { petId } = req.body;

    const updated = await schema.destroy({
        where: {
            petId
        }
    })

    if (updated) {
        res.status(204).json({
            message: "Found it!"
        });
    } else {
        res.status(404).json({ message: "Not found!" })
    }
}