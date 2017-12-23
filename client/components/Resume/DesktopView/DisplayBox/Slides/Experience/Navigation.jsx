import React from 'react';

import Button from './Button.jsx';

import style from './style';

const Navigation = (props) => {

  const { prevClick, nextClick, applyStyles } = props;

  return (

    <div style={style.navigationLayout}>
      <Button 
        label={'Prev'}
        onClick={prevClick}
        applyStyles={applyStyles}
      />
      <Button 
        label={'Next'}
        onClick={nextClick}
        applyStyles={applyStyles}
      />
    </div>

  );
}

export default Navigation;