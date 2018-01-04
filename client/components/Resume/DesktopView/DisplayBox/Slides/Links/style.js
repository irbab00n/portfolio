module.exports.body = {
  position: 'relative',
  right: '-1000px',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: 'rgb(250, 250, 250)',
  WebkitTransition: '0.2s'
};

module.exports.body_loaded = {
  right: '0px'
};


module.exports.button = {
  cursor: 'pointer',
  height: '50px',
  width: '375px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  borderWidth: '2px',
  borderRadius: '2px',
  borderColor: '#f2f2f2',
  fontSize: '14px',
  WebkitUserSelect: 'none',
  khtmlUserSelect: 'none',
  MozUserSelect: 'none',
  OUserSelect: 'none',
  userSelect: 'none',
  WebkitTransition: '0.2s'
};

module.exports.button_loaded = {
  boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.3)'
};

module.exports.button_hovered = {
  boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.6)',
  // backgroundColor: 'rgba(0, 122, 193, 1.0)',
  color: '#f2f2f2'
};

module.exports.button_clicked = {
  boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.0)',
  backgroundColor: 'rgba(0, 60, 100, 1.0)',
};