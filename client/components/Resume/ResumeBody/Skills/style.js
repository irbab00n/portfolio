module.exports.body = {
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.0) 0%, rgba(226, 224, 230, 1.0) 30%)',
  justifyContent: 'space-evenly',
  WebkitTransition: '0.2s'
};

module.exports.body_on = {
  backgroundColor: 'rgba(250, 250, 250, 1.0)',
};

module.exports.skillsList_container = {
  height: '800px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.0) 0%, rgba(226, 224, 230, 0.4) 50%)',
  zIndex: 1
};

module.exports.skillsList_grid = {
  width: '100%',
  maxWidth: '1600px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

module.exports.skillsList_card = {
  height: '400px',
  width: '100%',
  maxWidth: '500px',
  display: 'flex',
  flexDirection: 'column',
  WebkitTransition: '1.0s ease',
  alignItems: 'center',
  perspective: '0px',
  transform: 'scale(1.0, 1.0)'

};

module.exports.skillsList_card_hovered = {
  backgroundColor: 'rgba(230, 230, 240, 0.4)',
  perspective: '1000px',
  transform: 'scale(1.05, 1.05)'
}