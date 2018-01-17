module.exports.projectContentBody = {
  position: 'absolute',
  height:'100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#e2e2e2'
};

module.exports.projectContentImagesBody = {
  height:'700px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'flex-start',
  backgroundColor: 'rgba(25, 25, 25, 1.0)',
};






module.exports.exitButtonBody = {
  margin: '50px 50px 0 0',
  height: '0px',
  width: '0px',
  borderRadius: '25px',
  zIndex: 0,
  WebkitUserSelect: 'none',
  khtmlUserSelect: 'none',
  MozUserSelect: 'none',
  OUserSelect: 'none',
  userSelect: 'none'
};

module.exports.exitButtonBody_loaded = {
  margin: '25px 25px 0 0',
  height: '50px',
  width: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(100, 100, 100, 1.0)',
  color: 'rgba(255, 255, 255, 1.0)',
  zIndex: 1,
  WebkitTransition: '0.2s'
};

module.exports.exitButtonBody_hovered = {
  boxShadow: 'inset 0 0 0 1000px rgba(224, 224, 224, 1.0)',
  color: 'rgba(20, 20, 20, 1.0)'
};

module.exports.exitButtonBody_clicked = {
  backgroundColor: 'rgba(242, 242, 242, 0.0)',
  fontSize: '0px'
};