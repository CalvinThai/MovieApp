import React from 'react';

class Movie extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      title: props.title,
      image: props.poster_path,
      plot_synopsis: props.plot_synopsis,
      user_rating: props.user_rating,
      release_date: props.release_date


    };
  }

  //title, image, plot synopsis, user rating ,release date

  render(){
    return(
      <div>
      <h1> {this.state.title} </h1>
      <img src = {this.state.image} alt="new" />
      <h1> {this.state.plot_synopsis} </h1>
      <h1> {this.state.user_rating} </h1>
      <h1> {this.state.release_date} </h1>


      </div>
    )
  }
}
export default Movie