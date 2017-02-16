import React from 'react';
import Header from './Header';


class Main extends React.Component {
  // constructor will run when component is made
  constructor () {
    super();
    this.state = {
      numBeers: 0
    }
  }
  // creates property called incrementBeers and sets it to an automatic function
  incrementBeers = () => {
    // we have to take a copy of state first
    const beerAmount = this.state.numBeers + 1;
    // when you see setState, it really means update state
    this.setState({
      numBeers: beerAmount
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header siteName="Beer Me!" />
        <button onClick={this.incrementBeers}>{this.state.numBeers}</button>
      </div>
    )
  }
};

export default Main;
