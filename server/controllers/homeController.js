// URL: Get /
const index = (req, res) => {
    // Calculando emojie
    const emojieDataset = [
      '💻',
      '👨‍💻',
      '🎈',
      '🎄',
      '🦺',
      '🎢',
      '🎁',
      '🚆',
      '🌍',
      '♥',
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
      name: 'PhD Ivan Rivalcoba',
      email: 'jorge.rr@gamadero.tecnm.mx',
      url: 'https://github.com/rivalcoba-dev',
      description:
        'Aplicación que te permite registrar ideas de proyectos. PwpcII-2022A',
      version: '0.0.alpha',
    });
  };
  
  export default {
    // Action Methods
    index,
    about,
  };
  