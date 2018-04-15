// expanded styles

module.exports.container_body = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  WebkitTransition: '0.2s ease-out',
};

module.exports.container_body_mobile_landscape = {
  
};

module.exports.container_body_mobile_portrait = {
  flexDirection: 'column',
  height: '50%'
};


// collapsed styles

module.exports.container_body_collapsed = {
  height: '100%',
  width: '50%',
  flexDirection: 'column',
  WebkitTransition: '0.5s ease-out',
};

module.exports.container_body_collapsed_mobile_landscape = {

};

module.exports.container_body_collapsed_mobile_portrait = {
  height: '40%',
  width: '100%'
};


/*

  expanded desktop
  expanded mobile landscape
  expanded mobile portrait


  collapsed desktop
  collapsed mobile landscape
  collapsed mobile portrait

*/