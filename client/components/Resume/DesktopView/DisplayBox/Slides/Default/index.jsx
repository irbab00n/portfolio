import React from 'react';
import apply from 'applystyles';

import ReactPlayer from 'react-player';

import style from './style';

class DefaultSlide extends React.Component {
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

    return (

      <div style={
        apply(
          style.body,
          loaded && style.body_loaded
        )
      }>
        <ReactPlayer url={'https://cosbyts.wistia.com/medias/gv3h2gdxoe'} playing/>
      </div>

    ); 

  }
}

export default DefaultSlide;