import React from 'react';

class Loader extends React.Component {
  static propTypes = {
    message: React.PropTypes.string.isRequired
  }

  render () {
    return(
      <div className="loader">
        <img src="/images/ball.svg"/>
        <h2>{this.props.message}</h2>
      </div>
    )
  }
}

export default Loader;
