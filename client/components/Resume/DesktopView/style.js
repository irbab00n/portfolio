module.exports.desktopBody = {
  height: '500px',
  width: '100%',
  display: 'flex',
  overflowX: 'hidden',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(250, 250, 250, 1.0)',
  WebkitTransition: '0.4s'
};


module.exports.image = {
  height: '300px',
  margin: '25px 25px 25px 50px',
  WebkitTransition: '0.4s'
};

module.exports.image_active = {
  boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.3)',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5)',
};



module.exports.resumeLink = {
  cursor: 'pointer',
  height: '70px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '2px',
  justifyContent: 'center',
  backgroundColor: 'rgb(250, 250, 250)',
  WebkitUserSelect: 'none',
  khtmlUserSelect: 'none',
  MozUserSelect: 'none',
  OUserSelect: 'none',
  userSelect: 'none',
  WebkitTransition: '0.2s'
};

module.exports.resumeLink_hovered = {
  boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.6)',
  backgroundColor: 'rgba(0, 122, 193, 1.0)',
  color: '#f2f2f2'
};

module.exports.resumeLink_clicked = {
  boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.0)',
  backgroundColor: 'rgba(0, 60, 100, 1.0)',
  color: '#f2f2f2'
};

module.exports.resumeLink_on = {
  boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.3)',
};
