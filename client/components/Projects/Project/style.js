// expanded styling

module.exports.list_body = {
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  height: '90vh',
  backgroundColor: 'rgba(200, 200, 200, 1.0)',
  WebkitTransition: '0.5s'
};

module.exports.list_body_mobile_landscape = {
  height: '180vh'
};

module.exports.list_body_mobile_portrait = {
  height: '200vh'
};


// collapsed styling

module.exports.list_body_collapsed = {
  height: '40vh'
};

module.exports.list_body_collapsed_mobile_landscape = {
  height: '80vh'
};

module.exports.list_body_collapsed_mobile_portrait = {
  height: '100vh'
};





module.exports.project_container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  WebkitTransition: '0.5s'
};

module.exports.project_container_mobile_landscape = {

};

module.exports.project_container_mobile_portrait = {

};

module.exports.project_container_collapsed = {
  flexDirection: 'row',
};





module.exports.project_content_container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  WebkitTransition: '0.1s ease-out',
};

module.exports.project_content_container_collapsed = {
  height: '100%',
  width: '50%',
  WebkitTransition: '0.5s ease-out',
};