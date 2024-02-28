import './App.css';
import { useState } from 'react';
import './Toggle.css';

function Button({content, onClick}){
  return <button onClick = {onClick}>{content}</button>
}



function App() {
  const [state, setState] = useState(false);

  const callBack = ()=>{
    setState(state => !state)
  }

  return (
    <div className="App" style={{margin: '50px'}}>
      <div className={`Toggle ${state? "Switch" : ""}`}>
        <div className={`Spin ${state? "Switch" : ""}`} onClick = {callBack}></div>
      </div>
      <p>{state? "ON" : "OFF"}</p>
    </div>
  );
}

export default App;
