import React from 'react';
import HomePage from './HomePage';

class Movie extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      title: props.title,
      image: props.poster_path,
      plot_synopsis: props.plot_synopsis,
      user_rating: props.user_rating,
      release_date: props.release_date,
      runtime: props.runtime,
      id: props.id,
      trailers: [],
      count: 0,
      page: props.page,
      job: 0
    };
    this.page = null;
  }

  handleClick(){
    this.setState({job:1});
    this.props.onPageChange(this.state.page)
    this.page = <HomePage page = {this.state.page}/>

  }

  render(){
    
    let trailers = [];
    fetch("https://api.themoviedb.org/3/movie/"+this.state.id+"/videos?api_key="+global.key+"&language=en-US")
    .then(res=>res.json())
    .then(
      (result) => {
        for (let i = 0; i<result['results'].length; i++){
          trailers.push("https://www.youtube.com/watch?v="+ result['results'][i].key)
        }
      this.setState(
        {
          trailers: trailers
        }
      )
      }
    )

    if (this.state.job===0){
      this.page = (
        <div>
          <p>{this.state.page}</p>
          <button className= "inline" onClick={()=> this.handleClick()}>Go Back</button>
          <p className = "inline moviep">Movie Detail</p>
          <h1 className ="moviep"> {this.state.title} </h1>
          <img src = {this.state.image} alt="new" />
          <p></p>

          <p className="moviep"> {this.state.release_date.slice(0,4)} </p>
          <p className="moviep"> {this.state.plot_synopsis} </p>
          <p className="moviep"> Rating: {this.state.user_rating} /10 </p>
          <p className="moviep"> {this.state.runtime} min </p>
          {this.state.trailers.map((trailer, index) =>(
                      //<li key = {movie.title}> {movie.title}</li>
                      //<a href = {"http://google.com/" + movie.id}><img src = {"http://image.tmdb.org/t/p/w185/" + movie.poster_path} alt="new" /></a>
                        <div key ={trailer}>
                          <a href={trailer} target="_blank">Trailer {index + 1}</a>

                        </div>
                      
                  ))}
        </div>
      )
    }
    return(
      this.page
    )
  }
}
export default Movie