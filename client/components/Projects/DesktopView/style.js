module.exports.body = {
  paddingBottom: '5px',
  height: '1000px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(225, 225, 225, 1.0)',
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
  backgroundColor: 'rgba(226, 226, 226, 1.0)',
  zIndex: 1,
  WebkitTransition: '0.5s'
};



module.exports.tabBody = {
  height: '250px',
  width: '100%',
  maxWidth: '1250px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'inset 0 0 0 1000px rgba(100, 100, 100, 0.3)',
  background: 'rgba(225, 225, 225, 1.0)',
  backgroundSize: 'cover',
  WebkitTransition: '0.5s'
};

module.exports.tabBody_hovered = {
  opactiy: '0.8',
  color: 'white'
}

module.exports.tabBody_clicked = {
  height: '25px',
  fontSize: '0px'
};