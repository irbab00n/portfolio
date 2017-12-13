import React from 'react';

import applyStyles from '../../../helpers/applyStyles';

import style from './style';

class ResumeLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  render() {

    const { name, onClick } = this.props;
    const { hovered } = this.state;

    return (

      <div
        onClick={onClick}
        onMouseEnter={() => { this.setState({hovered: true}); }}
        onMouseLeave={() => { this.setState({hovered: false}); }}
        style={
          applyStyles(
            style.resumeLink,
            hovered && style.resumeLink_hovered
          )
        }
      >
        {name}
      </div>

    );

  }
}

export default ResumeLink;