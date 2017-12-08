import React from 'react';

import style from './style';

import applyStyles from '../../../helpers/applyStyles';

class CurrentSelection extends React.Component {
  constructor(props) {
    super(props);
    this.displayCurrentSection = this.displayCurrentSection.bind(this);
  }

  displayCurrentSection(y, targetsObj) {
    let targets = Object.keys(targetsObj);
    for (let i = 0; i < targets.length; i++) {
      let range = targetsObj[targets[i]];
      if (y >= range.start && y <= range.end) {
        return range.label;
      }
    }
  }

  render() {

    const { yOffset, targets, dropdownToggle } = this.props;

    return (

      <div style={applyStyles(style.currentSelection, dropdownToggle && style.currentSelection_pressed)}>
        {
          this.displayCurrentSection(yOffset, targets)
        }
      </div>

    );

  }
}

export default CurrentSelection;