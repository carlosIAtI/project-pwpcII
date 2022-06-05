import log from '../config/winston';
// Action Methods
// Get Projects
const index = (req, res) => {
    res.send("get projets")
}
// add projects
const add = (req, res) => {
     res.render('contact/contactView', {})
}

// add projects
const addPost = (req, res) => {
    const { errorData: error } = req;
    if (error) {
      log.info('Se retorna objeto de error de validacion');
      // La validacion fallo
      res.status(200).json(error);
    } 
      // Desestructurando la informacion
      // del formulario
      const { validData: project } = req;
      log.info('Se retorna objeto Projecto valido');
      // Regresar un objeto con los datos
      // obtenidos del formulario
      res.status(200).json(project);
    
 }


export default {
    index,
    add,
    addPost ,
}       
