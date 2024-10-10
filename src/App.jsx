import React,{useState} from 'react'
import Hero from './Hero';
import Login from './Login'
import Background from './Background';

function App() {
  const [log,loginClicked] = useState(true);
  return (
    <div>
      {log ? <Login loginClicked={loginClicked}/> :
      <>
      <Background />
      <Hero loginClicked={loginClicked} log={log}/>
      </>
      }
    </div>
  )
}

export default App