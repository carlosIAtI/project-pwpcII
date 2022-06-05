import * as Yup from 'yup';

const projectSchema = Yup.object().shape({
    name: Yup.string().required(`Se requiere un nombre`),
    email: Yup.string().required(`Se requiere un email`),
    mensaje: Yup.string(`El Mensaje esta limitada a 500 caracteres`)
    .required(`Se require un mensaje`),
});

const getProject = (req) => {
    const { name, email, mensaje } = req.body;

    return {
        name,
        email,
        mensaje,
    };
};


export default { projectSchema, getProject };

