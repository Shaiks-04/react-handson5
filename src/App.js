import './style.css';
import HOC from './higherComp/info-Hoc';
import PureCompInfo from './pureComp/pureCompInfo';
import CountC from './higherComp/countC';
import CountH from './higherComp/countH';
import PureCountC from './pureComp/pureCountC';
import PureCountH from './pureComp/pureCountH';
import { useState } from 'react';

function App() {
  const [show,setShow]=useState(true);

  const click=()=>{
    setShow(!show);
  }

  return (
  <>
    <header>
    <h1>Higher Order Components</h1>
    <i onClick={click} style={{cursor:'pointer',color:'blue',textDecoration:'underline'}}>more-info</i>
    </header>
    {show ?
      <div className="App">
          <CountH/>
          <div>
          <CountC/>
          </div>
      </div>
    : <HOC/>
    }
    <h1>Pure Components</h1>
    {show ?
    <div className="pdiv">
      <PureCountC/>
      <PureCountH/>
    </div>
    : <PureCompInfo />}
  </>
  );
}

export default App;
