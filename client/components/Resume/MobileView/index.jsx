import React from 'react';

class MobileView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div style={{
        height: '1000px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}>
        <div>
          <img src='https://s3-us-west-1.amazonaws.com/cos-bytes.com/headshot.jpg'
            style={{height: '600px', padding: '25px'}}
          />
        </div>

        <div style={{width: '300px', padding: '25px'}}>
          This will be a small biography about me and my mission statement
        </div>
      </div>

    );

  }
}

export default MobileView;