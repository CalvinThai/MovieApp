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
      job: 0
    };
    this.page = null;
  }

  handleClick(e){
    this.setState({job:1});
    this.page = <HomePage />

  }

  //title, image, plot synopsis, user rating ,release date

  render(){
    if (this.state.job===0){
      this.page = (
        <div>
          <button onClick={()=> this.handleClick()}>Go Back</button>
          <h1> {this.state.title} </h1>
          <img src = {this.state.image} alt="new" />
          <h1> {this.state.plot_synopsis} </h1>
          <h1> {this.state.user_rating} </h1>
          <h1> {this.state.release_date} </h1>
        </div>
      )
    }
    return(
      this.page
    )
  }
}
export default Movie