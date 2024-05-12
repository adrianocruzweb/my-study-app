import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Menu from './component/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header logo={logo}/>
    </div>
  );
}

export default App;
