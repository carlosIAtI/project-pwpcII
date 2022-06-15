import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
    name: Yup.string().required(`Se requiere un nombre`),
    // email: Yup.string().required(`Se requiere un email`),
    email: Yup.string().email('Ingrese un email valido').required('Se requiered email'),
    mensaje: Yup.string()
    .max(500, 'La descripción esta limitada a 500 caracteres')
    .required(`Se require un mensaje`),
});

const getContact = (req) => {
    const { name, email, mensaje } = req.body;

    return {
        name,
        email,
        mensaje,
    };
};


export default { contactSchema,  getContact };

