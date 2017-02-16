import React from 'react';
import Header from './Header';
import Loader from './Loader';
import Results from './Results';
import Beer from './Beer';
import Single from './Single';

class Main extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header siteName="Beer Me!" />
        <Loader message="This is the message prop" />
        <Results />
        <Beer />
        <Single />
      </div>
    )
  }
};

export default Main;
