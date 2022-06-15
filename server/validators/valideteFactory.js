// Usando el patron Factory para la creacion
// de un middleware de validacion
const Validator = ({ shape, getObject } ) =>
    async (req, res, next) => {
        // construir el objeto a validar
        const dataObject = getObject(req);
        // SE realiza el proceso de validacion
        try {
            // se valida el objeto  con el shape
            // validate acepta dos argumentos
            // arg1: objeto a validar
            // arg2: opciones de validacion
            const validData = await shape.validate(dataObject, {
                abortEarly: false,
            });
            req.validData = validData;
        }catch(error){
            req.errorData = error;

        }

        return next();
    };


export default Validator;
