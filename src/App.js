import React from 'react';
import logo from './logo.svg';

import './App.css';
//key: 5d42ffc91983f9505c131b035b679cb8   "https://api.themoviedb.org/3/movie/popular?api_key=5d42ffc91983f9505c131b035b679cb8&language=en-US&page=1"
class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      isLoaded: false,
      movies: [],
      total_movies: 0,
      pages: 0

    };
  }

  render(){
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=5d42ffc91983f9505c131b035b679cb8&language=en-US&page=1")
      .then(res => res.json())
      .then(
        (movie) => {
        this.setState({
          isLoaded:true,
          movies: movie['results'],
          total_movies: movie['total_results'],
          pages: 1

        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
      )
      //movie url picture: http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg
    return(
      //<HomePage />
      (
        <div>
        <h1> Pop Movies</h1>
        <ul>
        {this.state.movies.map(movie =>(
            //<li key = {movie.title}> {movie.title}</li>
            <li>
            <a href = "https://google.com"><img src = {"http://image.tmdb.org/t/p/w185/" + movie.poster_path} alt="new" /></a>
            </li>
        ))}
        </ul>
        </div>
    )
    )
    }
}
export default App;
