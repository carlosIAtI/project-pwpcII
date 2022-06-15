// 1 ODM - Mongoose
import mongoose from 'mongoose';

// 2 Desestructura el modulo
// de Schemas de Mongoose
const { Schema } = mongoose;

// 3 Creamos el Schema
const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mensaje: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Generar el Modelo a partir de un Schema
// Compilar el modelo
export default mongoose.model('contacts', ContactSchema);
