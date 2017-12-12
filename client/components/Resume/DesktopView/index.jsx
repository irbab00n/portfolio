import React from 'react';

class DesktopView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{
        height: '500px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}>
        <div>
          <img 
            src='https://s3-us-west-1.amazonaws.com/cos-bytes.com/me.jpg'
            style={{height: '300px', padding: '25px'}}
          />
        </div>

        <div style={{width: '100%', height: '300px', padding: '25px'}}>
          This will be a small biography about me and my mission statement
        </div>

        <div style={{
          width: '400px',
          height: '300px',
          padding: '25px'
        }}>

        </div>
      </div>

    );

  }
}

export default DesktopView;