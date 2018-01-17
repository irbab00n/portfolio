/* Current Image Container Styles */

module.exports.currentImageBody = {
  position: 'relative',
  top: '0px',
  margin: '25px 0',
  height: '450px',
  width: '800px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  WebkitTransition: '0.2s',
  perspective: '1000px'
};

module.exports.currentImageBody_hovered = {
  top: '50px'
};

module.exports.currentImageBody_shakeLeft = {
  top: '45px',
};

module.exports.currentImageBody_shakeRight = {
  top: '55px'
};

/* Description Styles */

module.exports.descriptionBody = {
  position: 'relative',
  top: '0px',
  left: 0,
  height: '0px',
  width: '100%',
  fontSize: '0px',
  backgroundColor: 'rgba(55, 55, 55, 0.0)',
  color: 'rgba(255, 255, 255, 0.8)',
  WebkitTransition: '0.2s',
  zIndex: 1
};

module.exports.descriptionBody_hovered = {
  height: '100px',
  top: '-100px',
  fontSize: '14px',
  backgroundColor: 'rgba(55, 55, 55, 0.6)'
};

module.exports.descriptionText = {
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

/* Current Image Styles */

module.exports.currentImage = {
  position: 'relative',
  top: '300px',
  left: 0,
  height: '0%',
  width: '100%',
  opacity: '0.0',
  cursor: 'pointer',
  objectFit: 'scale-down',
  WebkitTransition: '0.3s'
};

module.exports.currentImage_loaded = {
  top: 0,
  left: 0,
  height: '100%',
  opacity: '1.0',
};

module.exports.currentImage_shakeLeft = {
  transform: 'rotateX(5deg)'
};

module.exports.currentImage_shakeRight = {
  transform: 'rotateX(-5deg)'
};

/* Available Image Container Styles */

module.exports.availableImagesContainer = {
  position: 'relative',
  top: '0px',
  left: '0px',
  height: '100px',
  width: '800px',
  display: 'flex',
  alignItems: 'center',
  overflowX: 'scroll',
  opacity: '0.0',
  perspective: '1000px',
  WebkitTransition: '0.4s',
};

module.exports.availableImagesContainer_loaded = {
  opacity: '1.0',
}

module.exports.availableImagesContainer_shakeLeft = {
  top: '-2px',
};

module.exports.availableImagesContainer_shakeRight = {
  top: '2px',
};

/* Available Image Styles */

module.exports.availableImageBody = {
  position: 'relative',
  top: 0,
  left: 0,
  padding: '0 10px',
  height: '40%',
  opacity: '0.0',
  cursor: 'pointer',
  WebkitTransition: '0.1s'
};

module.exports.availableImageBody_loaded = {
  height: '50%',
  opacity: '0.5',
};

module.exports.availableImageBody_shakeLeft = {
  transform: 'rotateX(10deg)'
};

module.exports.availableImageBody_shakeRight = {
  transform: 'rotateX(-10deg)'
};

module.exports.availableImageBody_selected = {
  height: '60%',
  opacity: '0.8'
};

/* Transition Button Styles */

module.exports.button = {
  padding: '25px',
  position: 'relative',
  top: '-50px',
  left: 0,
  height: '400px',
  width: '75px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontSize: '60px',
  color: 'rgba(230, 230, 230, 0.7)',
  WebkitUserSelect: 'none',
  khtmlUserSelect: 'none',
  MozUserSelect: 'none',
  OUserSelect: 'none',
  userSelect: 'none',
  WebkitTransition: '0.4s',
  perspective: '1000px',
  transform: 'rotateY(0deg)'
};

module.exports.button_loaded = {
  color: 'rgba(200, 200, 200, 0.5)',
  left: '0px'
};

module.exports.button_hovered = {
  backgroundColor: 'rgba(200, 200, 200, 0.1)',
  boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.2)',
  color: 'rgba(200, 200, 200, 1.0)'
};

module.exports.button_clicked = {
  width: '110px',
  boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.2)',
  backgroundColor: 'rgba(200, 200, 200, 0.4)',
};

module.exports.button_animateLeft = {
  left: '-25px',
  transform: 'rotateY(-55deg)'
};

module.exports.button_animateRight = {
  left: '25px',
  transform: 'rotateY(55deg)'
};