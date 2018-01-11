



module.exports.button = {
  margin: '25px',
  position: 'relative',
  top: '-50px',
  height: '400px',
  width: '75px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '60px',
  color: 'rgba(200, 200, 200, 0.5)',
  WebkitUserSelect: 'none',
  khtmlUserSelect: 'none',
  MozUserSelect: 'none',
  OUserSelect: 'none',
  userSelect: 'none',
  WebkitTransition: '0.2s'
};

module.exports.button_hovered = {
  backgroundColor: 'rgba(200, 200, 200, 0.1)',
  boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.2)',
  color: 'rgba(200, 200, 200, 1.0)'
};

module.exports.button_clicked = {
  boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.2)',
  backgroundColor: 'rgba(200, 200, 200, 0.4)',
};