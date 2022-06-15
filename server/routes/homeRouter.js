import { Router } from 'express';
import homeController from '../controllers/homeController';
import contacController from '../controllers/contacController';
import menssagesController from '../controllers/menssagesController'
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
    shape: contactValidator.contactSchema,
    getObject: contactValidator.getContact,
  }), contacController.addPost);

  router.get('/messages', menssagesController.list)
// Exportando Router
export default router;
