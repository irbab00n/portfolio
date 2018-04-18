// expanded styles

module.exports.title_block = {
  height: '100%',
  width: '40%',
  minWidth: '40vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(220, 220, 220, 0.4)'
};

module.exports.title_block_mobile_landscape = {
  height: '50%',
  width: '100%'
};

module.exports.title_block_mobile_portrait = {
  height: '50vh',
  width: '100vw',
};

// collapsed styles

module.exports.title_block_collapsed = {
  height: '100%',
  width: '40%',
  minWidth: '40vw'
};

module.exports.title_block_collapsed_mobile_landscape = {
  height: '100%'
};

module.exports.title_block_collapsed_mobile_portrait = {
  width: '100%',
};


// Title Text Styles


module.exports.title_text = {
  color: 'rgba(35, 35, 35, 1.0)',
  WebkitTransition: '0.5s'
};

module.exports.title_text_collapsed = {};

module.exports.title_text_fadein = {
  color: 'rgba(35, 35, 35, 0.0)',
  WebkitTransition: 'none'
}