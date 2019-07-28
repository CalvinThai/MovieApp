import React from "react";
import Movie from "./Movie";
import PageChange from "./PageChange"


class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          isLoaded: false,
          movies: [],
          total_movies: 0,
          page: props.page,
          job: 0
        };
        this.page = null;
      }

      onPageChange(page){
        this.setState({
          page: page
        })
        window.scrollTo(0, 0)
      }

      handleClick(e){
        this.setState({job:1});
        //e.preventDefault();
        console.log(this.state.job);
        console.log(e)
        let moviepage = null;
        let pageholder = this.state.page + 1

        fetch("https://api.themoviedb.org/3/movie/"+e+"?api_key=5d42ffc91983f9505c131b035b679cb8&language=en-US&page="+ this.state.page)
          .then(res => res.json())
          .then(
            (movie)=> {
              console.log(movie['original_title']);
              moviepage = <Movie 
                title={movie['original_title']} 
                poster_path = {this.returnPosterPath(movie['poster_path'])}
                plot_synopsis = {movie['overview']}
                user_rating = {movie['vote_average']}
                release_date = {movie['release_date']}
                runtime = {movie['runtime']}
                id = {movie['id']}
                page = {this.state.page}
                onPageChange = {this.onPageChange.bind(this)}
                />;


              this.page = moviepage;

            }
          )
      }

      returnPosterPath(pathid){
        return ("http://image.tmdb.org/t/p/w185/" + pathid);
      }


      render(){
        let pageholder = this.state.page + 1
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=5d42ffc91983f9505c131b035b679cb8&language=en-US&page="+this.state.page)
          .then(res => res.json())
          .then(
            (movie) => {
            this.setState({
              isLoaded:true,
              movies: movie['results'],
              total_movies: movie['total_results']
    
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
        if (this.state.job === 0){
          this.page = (
            <div>
              <h1>{this.state.page}</h1>
              <h1 className ="Pop-Movies"> Pop Movies</h1>
              <div className = "container">
                <div className="row row-no-padding">
                  {this.state.movies.map(movie =>(
                      //<li key = {movie.title}> {movie.title}</li>
                      //<a href = {"http://google.com/" + movie.id}><img src = {"http://image.tmdb.org/t/p/w185/" + movie.poster_path} alt="new" /></a>
                        <div className="col-xs-6" key={movie.id}>
                          <button className ="posterbutton" onClick={()=> this.handleClick(movie.id)}><img src = {this.returnPosterPath(movie.poster_path)} width = "175" height = "279px"/></button>
                        </div>
                    
                  ))}
                </div>
              </div>
              <PageChange 
                page={this.state.page} 
                onPageChange = {this.onPageChange.bind(this)}
              />

            </div>
            )
        }
        return(
          this.page
        )
        }
}
export default HomePage


