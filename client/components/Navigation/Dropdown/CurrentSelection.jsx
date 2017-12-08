import React from 'react';

import style from './style';

class CurrentSelection extends React.Component {
  constructor(props) {
    super(props);
    this.displayCurrentSection = this.displayCurrentSection.bind(this);
  }

  displayCurrentSection(y, targets) {
    console.log('placeholder')
  }

  render() {

    return (

      <div style={style.currentSelection}>
        Hi
      </div>

    );

  }
}