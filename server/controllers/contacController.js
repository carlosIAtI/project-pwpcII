import log from '../config/winston';
import ContactModel from '../models/ContactModel';
// Action Methods
// Get list contact
const index = async (req, res) => {
  try {
    log.info('Leyendo mensaje...⏱️');
    const contacts = await ContactModel.find();
    log.info('Lista mensajes...✅');
    res.json(contacts);
  } catch (error) {
    log.error(`Error databases`);
    res.status(500).json(error);
  }
};
// add contact
const contact = (req, res) => {
     res.render('home/contactView', {})
}

// add contact
const addPost = async (req, res) => {
    const { errorData, validData } = req;
    let contact = {};
    let errorModel = {};
    if(errorData){
      log.error('Error Validate...❌')
      contact = errorData.value;
      errorModel = errorData.inner.reduce((prev,curr)=>{
        const newVAl = prev;
        newVAl[`${curr.path}Error`] = curr.message;
        return newVAl;
      },{});
      return res.render('home/contactView', {contact, errorModel})
    } 
    log.info('Object Validate');
    const contactModel = new ContactModel(validData);
    try {
      log.info('salving menssaje...⏱️');
      contact = await contactModel.save();
      log.info('Menssaje save...✅');
      return res.redirect('/messages');
    } catch (error) {
      log.error(`Error databases ${error.message}`);
      return res.status(500).json({ error })
    }
 };


export default {
    index,
    contact,
    addPost,
}       
