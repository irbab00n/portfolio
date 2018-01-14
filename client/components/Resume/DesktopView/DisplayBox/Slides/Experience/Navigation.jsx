import React from 'react';

import Button from './Button.jsx';

import style from './style';

const Navigation = (props) => {

  const { prevClick, nextClick, } = props;

  return (

    <div style={style.navigationLayout}>
      <Button 
        label={'Prev'}
        onClick={prevClick}
      />
      <Button 
        label={'Next'}
        onClick={nextClick}
      />
    </div>

  );
}

export default Navigation;