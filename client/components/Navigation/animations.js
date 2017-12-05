module.exports.fadeIn = {
  backgroundColor: `rgba(250, 250, 250, ${(percentScrolled / 10).toFixed(1)})`, 
  boxShadow: `0 4px 8px 0 rgba(0, 0, 0, ${(percentScrolled / 100).toFixed(2) >= 0.4 ? 0.4 : (percentScrolled / 100).toFixed(2)})`
};

module.exports.sharp = {
  backgroundColor: 'rgba(250, 250, 250, 1.0)', 
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4)'
};

