import React from 'react';

import applyStyles from '../../../helpers/applyStyles';

import style from './style';

class ResumeLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      clicked: false
    };
  }

  render() {

    const { hovered, clicked } = this.state;
    const { name, currentSlide, onClick, triggeredOn } = this.props;

    return (

      <div
        onClick={
          () => {this.setState({clicked: true}, () => {
            setTimeout(() => {
              this.setState({clicked: false}, onClick)
            }, 100);
          });}
        }
        onMouseEnter={() => { this.setState({hovered: true}); }}
        onMouseLeave={() => { this.setState({hovered: false}); }}
        style={
          applyStyles(
            style.resumeLink,
            triggeredOn && style.resumeLink_on,
            hovered && style.resumeLink_hovered,
            name.toLowerCase() === currentSlide && style.resumeLink_hovered,
            clicked && style.resumeLink_clicked,
          )
        }
      >
        {name}
      </div>

    );

  }
}

export default ResumeLink;