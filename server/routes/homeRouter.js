import { Router } from 'express';
import homeController from '../controllers/homeController';
import contacController from '../controllers/contacController';
// Validate
import Validate from '../validators/valideteFactory'

// Project Validate
import contactValidator from '../validators/contactValidator'


const router = new Router();

// Get "/"
router.get(['/', '/home'], homeController.index);

// Get "/about"
router.get('/about', homeController.about);
router.get('/contact', homeController.contact);

router.post('/contact', Validate({
    shape: contactValidator.projectSchema,
    getObject: contactValidator.getProject,
  }), contacController.addPost);

// Exportando Router
export default router;
