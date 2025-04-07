import express from 'express';
import { handleSecretSanta } from '../controllers/santaController.js';

const router = express.Router();

router.get('/generate', handleSecretSanta);

export default router;
