// expanded styles

module.exports.container_body = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  width: '100%',
  height: '40%',
  backgroundColor: 'rgba(150, 150, 150, 0.2)',
};

module.exports.container_body_mobile_landscape = {
  flexDirection: 'column',
  height: '90vh'
};

module.exports.container_body_mobile_portrait = {
  width: '100%',
  height: '90vh'
};


// collapsed styles

module.exports.container_body_collapsed = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  width: '40%',
  height: '100%',
};

module.exports.container_body_collapsed_mobile_landscape = {

};

module.exports.container_body_collapsed_mobile_portrait = {
  width: '100%',
  height: '40vh'
};


/*

  expanded desktop
  expanded mobile landscape
  expanded mobile portrait


  collapsed desktop
  collapsed mobile landscape
  collapsed mobile portrait

*/