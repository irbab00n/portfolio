import React from 'react';

import style from './style';


class ExitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      clicked: false
    };
  }

  render() {

    const { hovered, clicked } = this.state;
    const { loaded, tabsClickToggleFalse, applyStyles } = this.props;

    return (

      <div 
        style={
          applyStyles(
            style.exitButtonBody,
            loaded && style.exitButtonBody_loaded,
            hovered && style.exitButtonBody_hovered,
            clicked && style.exitButtonBody_clicked
          )
        }
        onClick={() => this.setState({clicked: true}, tabsClickToggleFalse)}
        onMouseEnter={() => this.setState({hovered: true})}
        onMouseLeave={() => this.setState({hovered: false})}
      >
        X
      </div>

    );

  }
}


export default ExitButton;