import React from 'react';
import apply from 'applystyles';

import LeftCloud from './LeftCloud.jsx';
import RightCloud from './RightCloud.jsx';
import TextScroller from './TextScroller.jsx';
import ReactPlayer from 'react-player';

import style from './style';

class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingPulse: false
    };
  }

  componentWillMount() {
    setInterval(() => {
      let { loadingPulse } = this.state;
      this.setState({
        loadingPulse: !loadingPulse
      });
    }, 500);
  }

  render() {

    const { loadingPulse } = this.state;

    const {
      screenWidth,
      screenHeight,
      percentScrolled,
      mobileToggle,
      orientationFlag,
      yOffset
    } = this.props;

    return (

      <div style={
        apply(
          style.body,
          mobileToggle && style.body_mobile_landscape,
          (mobileToggle && orientationFlag) && style.body_mobile_portrait
        )
      }>

        <RightCloud
          mobileToggle={mobileToggle}
          orientationFlag={orientationFlag}
          yOffset={yOffset}
        />

        <div style={
          apply(  
            {
              position: 'relative',
              top: '-50px',
              height: '480px',
              marginBottom: '30px',
              width: '720px',
              backgroundColor: 'rgba(240, 240, 240, 0.8)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 2,
            }
          )
        }>
          <div style={
            apply(  
              {
                position: 'relative',
                top: '240px',
                left: '0px',
                height: '30px',
                fontSize: '20px',
                color: 'rgba(15, 15, 15, 0.2)',
                WebkitTransition: '0.5s'
              },
              loadingPulse && {color: 'rgba(15, 15, 15, 1.0)'}
            )
          }>
            Loading...
          </div>
          <ReactPlayer url={'https://cosbyts.wistia.com/medias/gv3h2gdxoe'} 
            style={{
              position: 'relative',
              top: '-24px',
              boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.6)',
            }}
            height={480}
            width={720}
          />
        </div>

        <TextScroller
          mobileToggle={mobileToggle}
          orientationFlag={orientationFlag}
          percentScrolled={percentScrolled}
        />

        <LeftCloud
          mobileToggle={mobileToggle}
          orientationFlag={orientationFlag}
          yOffset={yOffset}
        />

      </div>

    );

  }
}



export default Jumbotron;