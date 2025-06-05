import { Router } from 'express';
import { getAllPets, addPet, updatePet, deletePet, getPetById } from './../controllers/pet.controller.js';

const router = Router();

//routes
router.get("/id", getPetById);
router.get("/", getAllPets);
router.post("/", addPet);
router.put("/", updatePet);
router.delete("/", deletePet);

export default router