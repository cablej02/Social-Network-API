import { Router } from 'express';
const router = Router();

// import controller
import { getAllUsers, getSingleUser, createUser, updateUser, deleteUser } from '../../controllers/userController.js';

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:id
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

export default router;