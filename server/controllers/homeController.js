// URL: Get /
const index = (req, res) => {
    // Calculando emojie
    const emojieDataset = [
      '🔱',
      '🪬',
      '🐧',
      '💓',
      '❌',
      '🧩',
      '💪',
      '🤖',
      '👾',
      '🦉',
    ];
    const emojie =
      emojieDataset[Math.floor(Math.random() * emojieDataset.length)];
    // View-Models
    const viewModel = {
      title: 'Project is Ready🏋️🏋️🏋️',
      author: 'Carlos Hernandez Martinez',
      emojie,
    };
    res.render('home/indexView', viewModel);
  };
  
  // URL: Get /about
  const about = (req, res) => {
    res.render('home/aboutView', {
      name: 'Carlos Hernandez Martinez',
      email: 'l171130075@gamadero.tecnm.mx',
      url: 'https://github.com/carlosIAtI/project-pwpcII',
      description:
        'Projecto para la materia de pwpcII-2022a',
      version: '0.0.alpha',
    });
  };

    // URL: Get /about
    const contact = (req, res) => {
      res.render('home/contactView', {

      });
    };
  
  export default {
    // Action Methods
    index,
    about,
    contact,
  };
  