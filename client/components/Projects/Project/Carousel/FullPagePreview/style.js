module.exports.full_page_preview_body = {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100vw',
  backgroundColor: 'rgba(35, 35, 35, 0.98)',
  zIndex: 9001,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  WebkitTransition: '0.5s',
};



module.exports.button_container = {
  alignSelf: 'flex-start',
  position: 'relative',
  top: '2vw',
  left: '95vw',
  WebkitTransition: '0.5s'
};

module.exports.button_container_mobile_landscape = {
  top: '2vw',
  left: '92vw',
};

module.exports.button_container_mobile_portrait = {
  top: '5vw',
  left: '85vw',
};


module.exports.button = {
  cursor: 'pointer',
  position: 'absolute',
  height: '3vw',
  width: '3vw',
  fontSize: '1.5vw',
  borderRadius: '5vh',
  backgroundColor: 'rgba(235, 235, 235, 0.1)',
  color: 'rgba(35, 35, 35, 0.9)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  WebkitUserSelect: 'none',
  khtmlUserSelect: 'none',
  MozUserSelect: 'none',
  OUserSelect: 'none',
  userSelect: 'none',
  WebkitTransition: '0.5s'
};

module.exports.button_hovered = {
  backgroundColor: 'rgba(235, 235, 235, 0.4)',
};

module.exports.button_fadein = {
  backgroundColor: 'rgba(235, 235, 235, 0.0)',
  WebkitTransition: '0.0s'
};

module.exports.button_mobile_landscape = {
  height: '5vw',
  width: '5vw',
  fontSize: '2.5vw'
};

module.exports.button_mobile_portait = {
  height: '10vw',
  width: '10vw',
  fontSize: '5vw'
};


module.exports.image_container = {
  margin: '2.5% 0',
  height: '75%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  WebkitTransition: '0.5s',
};

module.exports.image_container_mobile_portait = {
  width: '90%'
};

module.exports.image = {
  objectFit: 'scale-down',
  width: 'auto',
  height: '100%',
  WebkitTransition: '0.5s',
  opacity: '1.0'
};

module.exports.image_fadein = {
  opacity: '0.0',
  WebkitTransition: '0.0s',
};

module.exports.image_mobile_portait = {
  width: '100%',
  height: 'auto',
};



module.exports.description_container = {
  margin: '2.5%',
  height: '15%',
  width: '95%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgba(235, 235, 235, 0.8)',
  fontSize: '100%',
  WebkitTransition: '0.5s',
};

module.exports.description_container_fadein = {
  color: 'rgba(235, 235, 235, 0.0)',
  WebkitTransition: '0.0s',
};

module.exports.description_container_mobile_portait = {
  fontSize: '150%',
}