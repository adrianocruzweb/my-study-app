import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Menu from './component/Menu';
import React from 'react';

function App() {

  const [num, setNum] = React.useState(0);

  return (
    <div className="App">
      <Menu />
      <Header logo={logo}/>
      <div>
        <p>{num}</p>
        <button onClick={()=>setNum(num+1)}>Click</button>
      </div>
    </div>
  );
}

export default App;
