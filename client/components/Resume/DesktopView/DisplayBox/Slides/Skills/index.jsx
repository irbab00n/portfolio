import React from 'react';

import style from './style';

class SkillsSlide extends React.Component {
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

        <div id="Highlighted Skills" style={{
          height: '100px',
          width: '100%',
          backgroundColor: 'white'
        }}>
          HI!
        </div>

        <div id="Skills body" style={{
          height: '300px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'spaced-evenly',
          backgroundColor: 'gray'
        }}>

          <div id="Strong Skills" style={{
            height: '300px',
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            -Item 1<br/>
            -Item 2<br/>
            -Item 3<br/>
            -Item 4<br/>
            -Item 1<br/>
            -Item 2<br/>
            -Item 3<br/>
            -Item 4<br/>
          </div>

          <div id="Experienced Skills" style={{
            height: '300px',
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            -Item 1<br/>
            -Item 2<br/>
            -Item 3<br/>
            -Item 4<br/>
            -Item 1<br/>
            -Item 2<br/>
            -Item 3<br/>
            -Item 4<br/>
          </div>

        </div>

      </div>

    ); 

  }
}

export default SkillsSlide;