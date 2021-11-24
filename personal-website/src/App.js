import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import NavigationBar from "./components/navigationbar";
import HomePage from "./components/Homepage";
import ButtonTrigger from "./components/ButtonTrigger";
import Test from "./components/test";
import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.smallScroll = this.smallScroll.bind(this);
    this.state = { yPos: 0, scrollLock:false, scrollPos:0 };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("wheel", this.smallScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    document.addEventListener("wheel", this.smallScroll);
  }

  smallScroll(event){
    this.setState({scrollPos: event})
    console.log(event.deltaY);
    console.log("space");
  }

  handleScroll() {
    this.setState({ yPos: window.scrollY });
    console.log(this.state.yPos);
    // console.log(this.state.yPos);
    // console.log(window.innerWidth);
    console.log(window.innerHeight);  
      //use this to find the height of the screen showing it - use this for page calculations
      //homepage is set to full height, so the innerheight.
    
      /*this doesn't update for some reason, but I can still use it and assume no updates*/
      
    
  }

  handleClick() {
    console.log("hey");
  }
  render() {
    return (
      <div>
        <NavigationBar 
        height={this.state.yPos<300?this.state.yPos/3:100 +"px"}
        display={(this.state.yPos<300 || window.innerWidth<600)?'none':'block'}
        displayName={this.state.yPos<300?'none':'block'}
        ></NavigationBar> {/*Set nav height to increase as it scrolls down*/}
        <HomePage scrollLock= {this.state.scrollLock} onClick={this.handleClick}></HomePage>
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
}

export default App;
