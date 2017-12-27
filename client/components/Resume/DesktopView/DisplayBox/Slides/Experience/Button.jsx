import React from 'react';

import style from './style';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      hovered: false,
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let { onClick } = this.props;
    this.setState({clicked: true}, () => {
      setTimeout(() => {
        this.setState({clicked: false}, onClick)
      }, 100);
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true
      }); 
    }, 500);
  }

  render() {

    const { loaded, hovered, clicked } = this.state;
    const { label, onClick, applyStyles } = this.props;

    return (

      <div 
        onClick={this.handleClick}
        onMouseEnter={() => { this.setState({hovered: true}); }}
        onMouseLeave={() => { this.setState({hovered: false}); }}
        style={
          applyStyles(
            style.button,
            loaded && style.button_loaded,
            hovered && style.button_hovered,
            clicked && style.button_clicked
          )
        }
      >
        {label}
      </div>

    );

  }
}

export default Button;