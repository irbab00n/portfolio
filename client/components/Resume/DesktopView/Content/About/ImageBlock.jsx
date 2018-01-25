import React from 'react';
import apply from 'applystyles';

import LinksBlock from './LinksBlock.jsx';

export default class ImageBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (

      <div style={
        apply(
          {
            height: '500px',
            width: '40%',
            minWidth: '350px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            WebkitTransition: '0.4s',
            zIndex: 1
          },
        )
      }>
        <img 
          src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/headshot.jpg"
          style={
            apply(
              {
                marginTop: '70px',
                height: '250px',
                WebkitTransition: '0.4s'
              }
            )
          }
        />

        <LinksBlock />
        
      </div>

    );

  }
}