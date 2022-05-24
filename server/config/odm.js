import mongoose from 'mongoose';

import  winston from './winston'

class MoongoseODM {
    constructor(url){
        this.url = url;
    }


async connect(){
    try {
        //Agregandos la librerias globales de es6 a moongose
        mongoose.Promise = global.Promise
        winston.info(`🧩 Conectando a la base de datos ${this.url}`)
        const connection = await mongoose.connect(this.url);
        return connection;
    } catch (error) {
        winston.info(`❌ Error databases ❌ `)
        winston.info(error)
        
    }
}
}

export default MoongoseODM;