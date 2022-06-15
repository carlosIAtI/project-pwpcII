import log from '../config/winston';
import ContactModel from '../models/ContactModel';
// Action Methods
// Get list contact
const list = async (req, res) => {
  try {
    let messages = [];
    log.info('Leyendo mensaje...⏱️');
    const contacts = await ContactModel.find();
    contacts.forEach((element)=>{
      messages = [...messages, element.mensaje];
    })
    log.info('Lista mensajes...✅');
    res.render('home/messageView', {messages})
  } catch (error) {
    log.error(`Error databases`);
    console.log(error)
    res.status(500).json(error);
  }
};


export default {
    list,

}       
