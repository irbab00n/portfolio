import React from 'react';


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    const { label, onClick } = this.props;

    return (

      <div 
        onClick={onClick}
        style={{
          height: '30px',
          width: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f2f2f2'
        }}
      >
        {label}
      </div>

    );

  }
}

export default Button;