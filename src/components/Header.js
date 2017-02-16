import React from 'react';

class Header extends React.Component {
  // note first is lower case, where you access it is upper
  static propTypes = {
    siteName: React.PropTypes.string.isRequired
  }

  render () {
    return(
      <h1>{this.props.siteName}</h1>

    )
  }
}

export default Header;
