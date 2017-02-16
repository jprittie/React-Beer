import React from 'react';
import Loader from './Loader';

class Single extends React.Component {

  constructor () {
    super();
    this.state = {
      beer: [],
      loading: true
    }
  }

  componentWillMount() {
    this.loadBeer();
  }

  loadBeer = () => {
    const beerId = this.props.match.params.beerId
    fetch(`http://api.react.beer/v2/beer/${beerId}`)
    .then(data => data.json())
    .then(result => {
      console.log('it worked');
      this.setState({ beer: result.data, loading: false });

    })
    .catch(err => console.error(err));
  }

  render () {
    if(this.state.loading) {
      return <Loader message="Loading...." />
    }
    const { name, labels, id } = this.state.beer;
    const image = labels.medium || 'not-found.jpg';

    return(
      <div className="single-beer">
        <h2>{name}</h2>
        <img src={image} alt={name} />
      </div>
    )
  }
}

export default Single;
