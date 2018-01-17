import React from 'react';
import apply from 'applystyles';

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
    const { loaded, tabsClickToggleFalse } = this.props;

    return (

      <div 
        style={
          apply(
            style.exitButtonBody,
            loaded && style.exitButtonBody_loaded,
            hovered && style.exitButtonBody_hovered,
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