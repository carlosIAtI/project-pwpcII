import { Router } from 'express';
import homeController from '../controllers/homeController';

const router = new Router();

// Get "/"
router.get(['/', '/home'], homeController.index);

// Get "/about"
router.get('/about', homeController.about);

// Exportando Router
export default router;
