import logo from './logo.svg';
import './App.css';
import './index.css'
import NavigationBar from './components/navigationbar';
import HomePage from './components/Homepage';
import ButtonTrigger from './components/ButtonTrigger';
import Test from './components/test';

function App() {
  function handleClick(){
    console.log("hey");
  }
  return (
    <div>
    <NavigationBar></NavigationBar>
    <HomePage onClick ={handleClick}></HomePage>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
