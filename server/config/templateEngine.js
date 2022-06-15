// Importamos el motor handlebars
import ExpHbs from 'express-handlebars';
import path from 'path';

export default (app) => {
  // 1 Registro el motor de plantillas
  app.engine(
    'hbs',
    ExpHbs({
      extname: '.hbs',
      defaultLayout: 'mainLayout',
    })
  );

  // 2 Establecer el motor de plantillas
  app.set('view engine', 'hbs');

  // 3 Estableciendo la ruta de las vistas
  app.set('views', path.join(__dirname, '..', 'views'));

  return app;
};
