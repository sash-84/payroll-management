import express from 'express';
import { login, getAuth } from '../controllers/authController.js';

const router = express.Router();

router.get('/auth', getAuth);
router.post('/login', login);

export default router;
