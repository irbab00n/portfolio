import React from 'react';
import apply from 'applystyles';

import LinksBlock from './LinksBlock.jsx';

export default class ImageBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { toggleLeftOff } = this.props;

    return (

      <div style={
        apply(
          {
            height: '463px',
            width: '100%',
            backgroundColor: 'rgba(245, 245, 245, 0.6)',
            boxShadow: '0 6px 12px 0 rgba(0, 0, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            WebkitTransition: '0.4s',
            zIndex: 1
          },
          toggleLeftOff && {backgroundColor: 'rgba(245, 245, 245, 0.0)', boxShadow: '0 6px 12px 0 rgba(0, 0, 0, 0.0)'}
        )
      }>
        <img 
          src="https://s3-us-west-1.amazonaws.com/cos-bytes.com/headshot.jpg"
          style={
            apply(
              {
                marginTop: '40px',
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