import React from 'react';
import HomePage from './HomePage';
import './App.css';
//key: 5d42ffc91983f9505c131b035b679cb8   "https://api.themoviedb.org/3/movie/popular?api_key=5d42ffc91983f9505c131b035b679cb8&language=en-US&page=1"
class App extends React.Component{
  constructor(props){
    super(props);
    };
    
  render(){

    return(
      <HomePage page = {1}/>
    )
    }
  }


export default App;
