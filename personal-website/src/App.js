import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import NavigationBar from "./components/navigationbar";
import HomePage from "./Sections/Homepage";
import ButtonTrigger from "./components/ButtonTrigger";
import Test from "./components/test";
import React from "react";
import CurrentProjects from "./Sections/CurrentProjects";


window.onbeforeunload = function () { //IMPORTANT - ON REFRESH IT MOVES THE PAGE TO THE TOP
  window.scrollTo(0, 0);
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.smallScroll = this.smallScroll.bind(this);
    this.state = { yPos: 0, scrollLock:true, scrollPos:0 };
  }

  authenticate(){ //used for loading screen - loading screen makes it seem cooler lol
    return new Promise(resolve => setTimeout(resolve, 2000)) // 1 seconds
  }

  handleResize(){
    console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
  }

  componentDidMount() {
    //Delete loading page

    this.authenticate().then(() => {
      const ele = document.getElementById('loading-screen');
      if(ele){
        ele.outerHTML='';
      }
    });

    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("wheel", this.smallScroll);

    window.addEventListener('resize', this.handleResize)
    
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    document.addEventListener("wheel", this.smallScroll);
  }

  smallScroll(event){
    this.setState({scrollPos: event})
    if (event.deltaY >10){
      console.log("scroll:)")
      this.setState({scrollLock:false});
      console.log("Scroll lock: " + this.state.scrollLock)
    }
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
        height={this.state.yPos<300?this.state.yPos/4:75 +"px"}
        display={(this.state.yPos<300 || window.innerWidth<600)?'none':'block'}
        displayName={this.state.yPos<300?'none':'block'}
        ></NavigationBar> {/*Set nav height to increase as it scrolls down*/}
        <HomePage lockScroll= {this.state.scrollLock} onClick={this.handleClick}></HomePage>
        <CurrentProjects></CurrentProjects>
        
        
        
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
