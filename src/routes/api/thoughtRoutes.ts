import { Router } from 'express';
const router = Router();

// import controller
import { getAllThoughts, getSingleThought, createThought } from '../../controllers/thoughtController.js';

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:id
router.route('/:id').get(getSingleThought);

export default router;
