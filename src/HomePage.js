import React from "react";
import Movie from "./Movie";
class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          isLoaded: false,
          movies: [],
          total_movies: 0,
          pages: 0,
          job: 0,
 
    
        };
        this.handleClick = this.handleClick.bind(this)
        this.page = null;
      }

      handleClick(e){
        this.setState({job:1});
        //e.preventDefault();
        console.log(this.state.job);
        console.log(e)
        let moviepage = null;

        fetch("https://api.themoviedb.org/3/movie/"+e+"?api_key=5d42ffc91983f9505c131b035b679cb8&language=en-US&page=1")
          .then(res => res.json())
          .then(
            (movie)=> {
              console.log(movie['original_title']);
              moviepage = <Movie title={movie['original_title']}/>;
              this.page = moviepage;

              //<Movie title={movie['original_title']}/>
            }
          )
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

        //console.log(this.state.movies[0])
        return(
          //<HomePage />

          
            <div>


            <h1> Pop Movies</h1>
            <ul>
            {this.state.movies.map(movie =>(
                //<li key = {movie.title}> {movie.title}</li>
                //<a href = {"http://google.com/" + movie.id}><img src = {"http://image.tmdb.org/t/p/w185/" + movie.poster_path} alt="new" /></a>
                <li key = {movie.id}>
                <button onClick={()=> this.handleClick(movie.id)}><img src = {"http://image.tmdb.org/t/p/w185/" + movie.poster_path} alt="new" /></button>
                </li>
            ))}
            </ul>
            </div>

        )
        }
}
//just rerender page with new movie and info and stuff
export default HomePage


