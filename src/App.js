import React from 'react';
import HomePage from './HomePage';
import './App.css';
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
