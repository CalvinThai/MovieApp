import React from 'react';

class Movie extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      title: props.title,
      image: "http://image.tmdb.org/t/p/w185/" + props.poster_path

    };
  }

  //title, image, plot synopsis, user rating ,release date

  render(){
    return(
      <div>
      <h1> {this.state.title} </h1>
      </div>
    )
  }
}
export default Movie