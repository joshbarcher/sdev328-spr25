import { Router } from 'express';
import { getAllPets, addPet, updatePet, deletePet } from './../controllers/pet.controller.js';

const router = Router();

//routes
router.get("/", getAllPets);
router.post("/", addPet);
router.put("/", updatePet);
router.delete("/", deletePet);

export default router