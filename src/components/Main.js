import React from 'react';
import Header from './Header';
import Results from './Results';
import Search from './Search';



class Main extends React.Component {
  // constructor will run when component is made
  constructor () {
    super();
    this.state = {
      numBeers: 0,
      beers: [],
      loading: true
    }
  }

  // no need for arrow... bc this is a React method, React will bind it for you
  // must pass it search term
  // this.props.match.params.searchTerm
  componentWillMount() {
    const params = this.props.match.params || {};
    const searchTerm = params.searchTerm || undefined;
    this.loadBeers(searchTerm);

  }
  // this will run just before component re-renders
  componentWillReceiveProps(nextProps) {
    this.loadBeers(nextProps.match.params.searchTerm)
  }


  // creates property called incrementBeers and sets it to an automatic function
  incrementBeers = () => {
    // we have to take a copy of state first
    const beerAmount = this.state.numBeers + 1;
    // when you see setState, it really means update state
    this.setState({
      numBeers: beerAmount,
      // note you can still call map on an empty array
      // bc when you load page it will be empty
      beers: []
    });
  }

  /* load beers method will accept one arg, but fallback to hops if nothing is passed */
  loadBeers = (searchTerm = "hops") => {
    this.setState({loading:true});

    // Check for beers in local storage
    const localStorageBeers = localStorage.getItem(`search-${searchTerm}`);
    if (localStorageBeers && false) {
      const localBeers = JSON.parse(localStorageBeers);
      this.setState({ beers: localBeers, loading: false });
      return; // stop before fetch happens!
    }



    // fetch is equivalent of $.ajax in jquery
    // previously in js we didn't have a way to interpolate data, but now we do
    // fetch doesn't assume it's json, so we have to
    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
      .then(data => data.json())
      .then(beers => {
        // we're looping over every beer; if there's a label, then beer.labels is truthy and will be add to const; don't need type coercison but we can do it just to force it to be a boolean
        const filteredBeers = beers.data.filter(beer => !!beer.labels);
        this.setState({ beers: filteredBeers, loading: false });
        // save to local storage in case we search for this again
        localStorage.setItem(`search-${searchTerm}`, JSON.stringify(this.state.beers));
      })
      .catch(err => console.error(err));
    }


  render() {
    return (
      <div className="wrapper">
        <Header siteName="Beer Me!" />
        <Search />
        <button onClick={this.incrementBeers}>{this.state.numBeers}</button>
        <Results beers={this.state.beers} loading={this.state.loading}/>
      </div>
    )
  }
};

export default Main;
