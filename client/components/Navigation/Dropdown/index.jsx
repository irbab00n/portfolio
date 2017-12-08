import React from 'react';

import Link from './Link.jsx';

import applyStyles from '../../../helpers/applyStyles';

import calculateDistanceToTarget from '../../../helpers/calculateDistanceToTarget';
import animationChooser from '../../../helpers/animationChooser';
import scrollEffects from '../../../helpers/scrollEffects';

import style from './style';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownToggle: false,
      selected: 'Home'
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.updateSelected = this.updateSelected.bind(this);
  }

  updateSelected(name) {
    this.setState({selected: name});
  }

  toggleDropdown(currentFlag) {
    this.setState({dropdownToggle: !currentFlag});
  }

  render() {

    const { dropdownToggle } = this.state;
    const { yOffset } = this.props;

    return (

      <div style={style.button}
        onClick={() => { this.toggleDropdown(dropdownToggle); }}
      >
        <div style={style.currentSelection}>
          
          {
            dropdownToggle
              ? 'Open'
              : 'Closed'
          }

        </div>

        <div style={applyStyles(style.dropdownBody_collapsed, dropdownToggle && style.dropdownBody_expanded)}>

          <div style={applyStyles(style.linkContainer_collapsed, dropdownToggle && style.linkContainer_collapsed)}>
            <Link 
              name={'Resume'}
              dropdownToggle={dropdownToggle}
              onClick={animationChooser(yOffset, 440, calculateDistanceToTarget, scrollEffects)}
            />
            <Link 
              name={'Projects'}
              dropdownToggle={dropdownToggle}
              onClick={animationChooser(yOffset, 1000, calculateDistanceToTarget, scrollEffects)}
            />
            <Link 
              name={'Blog'}
              dropdownToggle={dropdownToggle}
              onClick={animationChooser(yOffset, 2000, calculateDistanceToTarget, scrollEffects)}
            />
          </div>
          
        </div>

      </div>

    );

  }
}

export default Dropdown;