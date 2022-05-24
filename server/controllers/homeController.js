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
      title: 'Index Controller Working!!!',
      author: 'Ivan Rivalcoba',
      emojie,
    };
    res.render('home/indexView', viewModel);
  };
  
  // URL: Get /about
  const about = (req, res) => {
    res.render('home/aboutView', {
      name: 'carlos hernandez martinez',
      email: 'l171130075@gamadero.tecnm.mx',
      url: 'https://github.com/carlosIAtI/project-pwpcII',
      description:
        'Projecto para la materia de pwpcII-2022a',
      version: '0.0.alpha',
    });
  };
  
  export default {
    // Action Methods
    index,
    about,
  };
  