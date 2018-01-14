import React from 'react';
import apply from 'applystyles';

import style from './style';


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

    const { yOffset, targets, dropdownToggle, orientationFlag } = this.props;

    return (

      <div style={
        apply(
          style.currentSelection,
          dropdownToggle && style.currentSelection_pressed,
          orientationFlag && style.currentSelection_mobile
        )
      }>
        {
          this.displayCurrentSection(yOffset, targets)
        }
      </div>

    );

  }
}

export default CurrentSelection;