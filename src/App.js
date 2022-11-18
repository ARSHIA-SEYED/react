import React , {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import Hello from './Hello';
import timer from './Timer';
import { useState } from 'react';

// class App extends React.Component {
// constructor(){
//   super();
//   this.state={
//     title : "سلام دوستان عزیزم"
//   }
//   // this.handleSetTitle = this.handleSetTitle.bind(this)
// }

//   handleSetTitle = ()=>{
//     this.setState({
//       title:"به سایت عرشیا خوش امدید"
//     })
//   }

//   // handleSetTitle (){
//   //   this.setState({
//   //     title:"به سایت عرشیا خوش امدید"
//   //   })
//   // }



//     render() {
//       return (
//         <div className='main'>
//          <hello title={this.state.title}/>
//         <timer x={this.handleSetTitle}/>
//         </div>
//       )
//     }
//   }
const App =()=>{
  const [titlle , setState] = useState("سلام دوستان عزیزم");

 const handleSetTitle =()=>{
   setTitle("به سایت عرشیا خوش امدید")
 }
return (
  <div className='main'>
         <hello title={this.state.title}/>
           <timer handleSetTitle={this.handleSetTitle}/>
           </div>
)
} 

  export default App;