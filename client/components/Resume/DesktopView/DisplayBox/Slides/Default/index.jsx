import React from 'react';

import style from './style';

class DefaultSlide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { applyStyles } = this.props;

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