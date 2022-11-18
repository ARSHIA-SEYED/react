import React , {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import Hello from './Hello';
import timer from './Timer';



const App =()=>{
  const [titlle , setState] = useState("سلام دوستان عزیزم");
  const [islight , setIslight] = useState(false);

useEffect(()=>{
console.log("useEffect");
return ()=>{
  
}


},[islight])

 const handleSetIslight =()=>{
   setTIslight(!islight)
 }
return (
  <div className='main' style={{background:islight ? "red" : "black"}} >
         <hello title={this.state.title}/>
           <timer islight={islight} handleSetIslight={handleSetIslight}/>
           </div>
)
} 

  export default App;