import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      results: []
    };
  }

  componentDidMount() {
    const url = 'https://omdb-api.now.sh/?s=star%20wars';
    fetch(url)
      .then(response => response.json())
      .then(result => {
        this.setState({
          results: result.Search
        });
      });
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Star Wars Movies</a>
          </nav>
        </header>
        <section className="container">
          <section className="row">
            {this.state.results.map(movie => {
              return (
                <div className="card col-sm-4">
                  <img className="card-img-top" src={movie.Poster} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <small>{movie.Year}</small>
                  </div>
                </div>
              )
            })}
          </section>
        </section>
      </div>
    );
  }
}

export default App;
