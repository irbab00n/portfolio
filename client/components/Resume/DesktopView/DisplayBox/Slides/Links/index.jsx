import React from 'react';

import style from './style';

class LinksSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true
      });
    }, 100)
  }

  render() {

    const { loaded } = this.state;
    const { applyStyles } = this.props;

    return (

      <div style={
        applyStyles(
          style.body,
          loaded && style.body_loaded
        )
      }>
        <center>This is the Links Slide.  This slide will display when the Links Tab is clicked</center>
      </div>

    ); 

  }
}

export default LinksSlide;