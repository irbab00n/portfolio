module.exports.body = {
  padding: '50px 0',
  height: '1000px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgb(35, 35, 35)',
};

module.exports.layeringAncestor = {
  position: 'relative',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  maxWidth: '1250px',
};



module.exports.tabsBody = {
  position: 'absolute',
  height:'100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: 1,
  WebkitTransition: '0.2s',
  fontSize: '30px'
};



module.exports.tabBody = {
  cursor: 'pointer',
  height: '250px',
  width: '100%',
  maxWidth: '1250px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'inset 0 0 0 1000px rgba(100, 100, 100, 0.3)',
  boxShadow: 'inset 0 0 3px 3px rgba(55, 55, 55, 0.1)',
  background: 'rgba(225, 225, 225, 1.0)',
  backgroundSize: 'cover',
  WebkitTransition: '0.2s'
};

module.exports.tabBody_hovered = {
  opactiy: '0.6',
  color: 'white'
}

module.exports.tabBody_clicked = {
  height: '25px',
  fontSize: '0px'
};