import React from 'react';

import style from './style';


const AboutBlock = (props) => {

  const { currentProject } = props;

  return (

    <div style={style.aboutBlockBody}>

      <div style={{
        height: '70px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(230, 230, 230, 1.0)',
      }}>
        Stack overview
      </div>
      
      <div style={{
        height: '210px',
        width: '100%',
      }}>

        <div style={{
          height: '30px',
          width: '100%',
          fontSize: '16px'
        }}>
          
          <div style={{
            padding: '10px 10px 15px 10px',
            color: 'rgba(0, 122, 193, 1.0)',
          }}>
            About this Project:
          </div>

        </div>

        <div style={{
          height: '170px',
          width: '100%',
          fontSize: '12px',
          overflowY: 'scroll'
        }}>
          
          <div style={{
            padding: '10px 10px',
          }}>
            {currentProject.about}
          </div>

        </div>
      </div>

    </div>

  );

};

export default AboutBlock;