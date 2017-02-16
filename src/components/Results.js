import React from 'react';
import Beer from './Beer';
import Loader from './Loader';


class Results extends React.Component {


  render () {
    if(this.props.loading) {
      return <Loader message="Pouring a cold one!" />

    }
    return(
      <div className="beers">
        {console.log(this.props.beers)}
        {this.props.beers.map( detail => <Beer details={detail} key={detail.id}/> )}
      </div>
    )
  }
}

export default Results;
