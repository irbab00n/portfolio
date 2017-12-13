import React from 'react';


class ResumeLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { name, onClick } = this.props;

    return (

      <div
        onClick={onClick}
      >
        {name}
      </div>

    );

  }
}

export default ResumeLink;