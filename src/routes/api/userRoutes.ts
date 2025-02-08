import { Router } from 'express';
const router = Router();

// import controller
import { getAllUsers, getSingleUser, createUser } from '../../controllers/userController.js';

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:id
router.route('/:id').get(getSingleUser);

export default router;