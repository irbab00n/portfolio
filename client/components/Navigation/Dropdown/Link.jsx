import React from 'react';

import style from './style';

import applyStyles from '../../../helpers/applyStyles';


class Link extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { dropdownToggle, name, onClick } = this.props;

    return (

      <div
        style={applyStyles(style.link_collapsed, dropdownToggle && style.link_expanded)}
        onClick={() => { onClick() }}
      >
        {dropdownToggle ? name : ''}
      </div>

    );

  }
}

export default Link;