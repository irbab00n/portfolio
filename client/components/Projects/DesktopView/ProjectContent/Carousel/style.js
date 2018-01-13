module.exports.currentImageBody = {
  position: 'relative',
  top: '0px',
  margin: '25px 0',
  height: '450px',
  width: '800px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  WebkitTransition: '0.1s',
  perspective: '1000px'
};

module.exports.currentImageBody_shakeLeft = {
  top: '-5px',
};

module.exports.currentImageBody_shakeRight = {
  top: '5px'
};

module.exports.currentImage = {
  width: '95%',
  opacity: '0.0',
  WebkitTransition: '0.2s'
};

module.exports.currentImage_loaded = {
  width: '100%',
  opacity: '1.0'
};

module.exports.currentImage_shakeLeft = {
  transform: 'rotateX(5deg)'
};

module.exports.currentImage_shakeRight = {
  transform: 'rotateX(-5deg)'
};



module.exports.availableImagesContainer = {
  position: 'relative',
  top: '0px',
  height: '100px',
  width: '800px',
  display: 'flex',
  alignItems: 'center',
  overflowX: 'scroll',
  opacity: '0.0',
  WebkitTransition: '0.1s',
  perspective: '1000px'
};

module.exports.availableImagesContainer_loaded = {
  opacity: '1.0'
}

module.exports.availableImagesContainer_shakeLeft = {
  top: '-5px',
}

module.exports.availableImagesContainer_shakeRight = {
  top: '5px',
}

module.exports.availableImageBody = {
  padding: '0 10px',
  height: '50%',
  opacity: '0.5',
  WebkitTransition: '0.2s'
};

module.exports.availableImageBody_shakeLeft = {
  transform: 'rotateX(5deg)'
};

module.exports.availableImageBody_shakeRight = {
  transform: 'rotateX(-5deg)'
};

module.exports.availableImageBody_selected = {
  height: '60%',
  opacity: '0.8'
};



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