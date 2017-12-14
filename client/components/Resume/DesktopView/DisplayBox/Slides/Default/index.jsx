import React from 'react';

import applyStyles from '../../../../../../helpers/applyStyles';

import style from './style';

class DefaultSlide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={
        applyStyles(
          style.body
        )
      }>
        <center>This is the default view.  This will be open by default, and will be toggled back to.</center>
      </div>

    ); 

  }
}

export default DefaultSlide;