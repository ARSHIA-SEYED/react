import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

var interval;

class timer extends React.Component{
    constructor(){
      super();
    this.state={
      hour : 0 , 
      minute : 0 , 
      second : 0,
      isStart :false
    }
    }

startInterval =()=>{
if (this.isStart == false) {
  this.setState({
    isStart: true
  })
  interval = setInterval(()=>{
    this.setState({
      second :this.state.second + 1
    })
    if (this.state.second ==60) {
      this.setState({
        second:0,
        minute:this.state.minute +1
      })
    }
    if (this.state.minute ==60) {
      this.setState({
        minute:0,
        hour:this.state.hour +1
      })
    }
        } , 1000)
}
}

stopInterval = ()=>{
  this.setState({
    isStart:false
  })
  clearInterval(interval);
}


resetInterval = ()=>{
this.stopInterval();
this.setState({
  hour : 0 , 
  minute : 0 , 
  second : 0,

})
}




    render(){
      let h = this.state.hour
      let m = this.state.minute
      let s = this.state.second
      return(
        <>
        <h2 className="timer">
       {`${h > 9 ? h : "0"+h} : ${m > 9 ? m : "0"+m} : ${s > 9 ? s : "0"+s} `}
       <h2/>
       <div className='button-box'>
      <span className="action-button start-burtton" onClick={this.startInterval}>start</span>
      <span className="action-button start-burtton" onClick={this.stopInterval}>stop</span>
      <span className="action-button start-burtton" onClick={this.resetInterval}>reset</span>
      <span className="action-button start-burtton" onClick={this.props.handleSetIslight} style={{background:this.props.islight ? "black" : "white" , color:this.props.islight ? "white" : "black"}}>{this.props.islight ? "dark" : "light"}</span>
      </div> 
      </>
      )
    }
  }
  
  export default timer;
  