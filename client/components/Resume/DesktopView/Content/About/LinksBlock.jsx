import React from 'react';
import apply from 'applystyles';

import Button from './Button.jsx';

export default class LinksBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (

      <div style={{
        marginTop: '32px',
        height: '100px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{
          height: '50px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <a href={'https://github.com/irbab00n'} target='_blank'>
            <Button 
              label={'https://s3-us-west-1.amazonaws.com/cos-bytes.com/github_logo.png'}
              labelType={'image'}
              hoverColor={{backgroundColor: 'rgb(64, 64, 64)'}}
              onClick={() => {}}
            />
          </a>

          <a href={'https://www.linkedin.com/in/cosbyts/'} target='_blank'>
            <Button 
              label={'https://s3-us-west-1.amazonaws.com/cos-bytes.com/linkedin_logo.png'}
              labelType={'image'}
              hoverColor={{backgroundColor: 'rgba(0, 122, 193, 1.0)'}}
              onClick={() => {}}
            />
          </a>
        </div>

        <div style={{
          height: '50px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px'
        }}>
          <span style={{fontWeight: 'bold', fontSize: '16px'}}>Email:</span>&nbsp;&nbsp;thomas@cos-bytes.com
        </div>
      </div>

    );

  }
}