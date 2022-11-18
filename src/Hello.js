import React from 'react';
import ReactDOM from 'react-dom/client';



class hello extends React.Component{
    render(){
      return(
        <h1>{this.props.title}</h1>
      )
    }
  }
  export default hello;