import React from 'react';

class Resume extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { screenWidth, screenHeight, percentScrolled } = this.props;
    const mobileToggle = screenWidth <= 100; // True

    let direction = screenWidth < screenHeight ? 'row' : 'column';

    return (

      <div style={{
        height: '500px',
        display: 'flex',
        flexDirection: direction,
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}>
        <div>
          <img src='https://s3-us-west-1.amazonaws.com/cos-bytes.com/me.jpg'
            style={{height: '300px', padding: '25px'}}
          />
        </div>

        <div style={{width: '300px', padding: '25px'}}>
          This will be a small biography about me and my mission statement
        </div>
      </div>

    );

  }
}

export default Resume;