import { Router } from 'express';
import * as UsersService from '../services/users/index.js';
const router = Router();
router.get('/', UsersService.getUser);
router.get('/:id', UsersService.getUserById);
export default router;