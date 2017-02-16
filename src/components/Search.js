import React from 'react';

class Search extends React.Component {

  onSubmit = (e) => {
    // 1. Stop the form from submitting
    e.preventDefault();
    // 2. Get the text from the input
    // need refs for this
    // note can't use string refs anymore... must use function refs
    // here, q just stands for query
    // sometimes you'd grab it on keyup
    var searchTerm = this.q.value;
    console.log('Gotta go to ', searchTerm);
    // 3. We use the router to change the URL
    this.context.router.push(`/search/${searchTerm}`);

  }

  static contextTypes = {
    // ask for the router nicely with contextTypes
    // router is a good example of where you would use context
    router: React.PropTypes.object.isRequired

  }

  render () {
    return(
      <div className="search">
        <form onSubmit={this.onSubmit}>
          <input type="text" ref={(q) => this.q = q} placeholder="Hoppy, Malt, Angry, New..." />
          <input type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}

export default Search;
