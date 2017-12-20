import React from 'react';

import style from './style';

class EducationSlide extends React.Component {
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

        <div id="Educational Institution" style={{
          height: '200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          backgroundColor: '#f2f2f2'
        }}>

          <div id="Header" style={{
            height: '70px',
            paddingBottom: '30px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div>
              Image
            </div>
            <div>
              Title
            </div>
          </div>

          <div id="Content" style={{
            height: '100px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            Body
          </div>

        </div>

        <div id="Educational Institution" style={{
          height: '200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          backgroundColor: '#f2f2f2'
        }}>

          <div id="Header" style={{
            height: '70px',
            paddingBottom: '30px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div>
              Image
            </div>
            <div>
              Title
            </div>
          </div>

          <div id="Content" style={{
            height: '100px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            Body
          </div>

        </div>

      </div>

    ); 

  }
}

export default EducationSlide;