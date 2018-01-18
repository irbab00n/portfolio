import React from 'react';
import apply from 'applystyles';

import Link from './Link.jsx';
import CurrentSelection from './CurrentSelection.jsx'

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
    const { yOffset, targets, orientationFlag } = this.props;

    return (

      <div 
        onClick={() => { this.toggleDropdown(dropdownToggle); }}
        style={
          apply(
            style.buttonBody,
            dropdownToggle && style.button_pressed,
            orientationFlag && style.buttonBody_mobile
          )
        }
      >
 
        <CurrentSelection 
          yOffset={yOffset}
          targets={targets}
          dropdownToggle={dropdownToggle}
          orientationFlag={orientationFlag}
        />

        <div style={
          apply(
            style.dropdownBody_collapsed,
            dropdownToggle && style.dropdownBody_expanded,
            (dropdownToggle && orientationFlag) && style.dropdownBody_mobile
          )
        }>

          <div style={
            apply(
              style.linkContainer,
            )
          }>
            <Link 
              name={'About Me'}
              dropdownToggle={dropdownToggle}
              orientationFlag={orientationFlag}
              onClick={animationChooser(yOffset, 442, scrollEffects)}
            />
            <Link 
              name={'Projects'}
              dropdownToggle={dropdownToggle}
              orientationFlag={orientationFlag}
              onClick={animationChooser(yOffset, 928, scrollEffects)}
            />
          </div>
          
        </div>

      </div>

    );

  }
}

export default Dropdown;