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
  height: '150vh'
};


// collapsed styling

module.exports.list_body_collapsed = {
  height: '40vh'
};

module.exports.list_body_collapsed_mobile_landscape = {
  height: '87vh'
};

module.exports.list_body_collapsed_mobile_portrait = {
  height: '90vh'
};





module.exports.project_container = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '180vh',
  WebkitTransition: '0.5s'
};

module.exports.project_container_mobile_landscape = {

};

module.exports.project_container_mobile_portrait = {
  height: '140vh'
};

module.exports.project_container_collapsed = {
  height: '80vh',
  flexDirection: 'row',
};

module.exports.project_container_collapsed_mobile_landscape = {
  flexDirection: 'row',
};

module.exports.project_container_collapsed_mobile_portrait = {
  flexDirection: 'column',
};