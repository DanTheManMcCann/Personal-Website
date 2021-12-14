import React from "react";
import ButtonTrigger from "../components/ButtonTrigger";
import TextAnimation from "../components/TextAnimation";
import TextAnimation2 from "../components/TextAnimation2";
import ScrollLock, { TouchScrollable } from "react-scrolllock";
import ProjectComponent from "../components/ProjectComponent";
import gsap from "gsap";
import homePage1 from "../assets/HomePage1.svg"
import homePage2 from "../assets/HomePage2.svg"
import homePage3 from "../assets/HomePage3.svg"
import homePage4 from "../assets/HomePage4.svg"
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollToPlugin);


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.scrollRef=React.createRef('');
    this.scrollTimeline =  gsap.timeline({paused:true, progress:0});
  }

  handleClick() {
    console.log("test 100");
  }

  componentDidMount(){
    console.log('test');
    console.log(this.scrollRef.current.scrollTo(0,0));
    const modifier=1; //should be 
    this.scrollTimeline
    .to(this.scrollRef.current, {duration: 0, scrollTo: {x:0} })
    .to(this.scrollRef.current, {duration: 2, ease: "power2", scrollTo: {x:window.innerWidth * modifier} }, ">+=1.5")
    .to(this.scrollRef.current, {duration: 2, ease: "power2", scrollTo: {x: window.innerWidth* modifier * 2} }, ">+=1.5") //1.5 seconds after
    .to(this.scrollRef.current, {duration: 6, ease: "power2", scrollTo: {x: window.innerWidth* modifier * 4} }, ">+=1.5") //1.5 seconds after
    .play();

  }

  componentDidUpdate(prevProps, prevState){ //prevprops old prop object
    if (this.props.yPos !== prevProps.yPos && this.props.yPos>window.innerHeight/4){ //if it changes & If the user is far down the page
      console.log('err');
      this.scrollTimeline.progress(1);
      this.scrollTimeline.play();
      this.scrollTimeline.pause();
    }


  }

  render() {
    return (
      <><div className="w-screen h-screen bg-black">
        <div className="w-screen h-screen test100" ref={this.scrollRef}>
        <img src={homePage1} className="h-screen"></img>
        <img src={homePage2} className="h-screen"></img>
        <img src={homePage3} className="h-screen"></img>
        <img src={homePage4} className="h-screen"></img>
        
        </div>
  

      </div>
        {/* <ScrollLock isActive={this.props.lockScroll}> */}
            <div
              className="flex items-center justify-evenly"
              style={{
                scrollSnapStop: "always",
                background:
                  "linear-gradient(to top, rgb(17, 24, 39), rgb(88, 28, 135), rgb(124, 58, 237))",
              }}
              id="HomePage"
            >
              {/* <TextAnimation
                timescale={1}
                end={this.props.yPos > 150}
              ></TextAnimation> */}
            
          </div>
        {/* </ScrollLock> */}
        {/* <TouchScrollable>
            <div className="h- bg-black">Hello</div>
        </TouchScrollable>
        <div className="bg-green-500 md:bg-red-500 lg:bg-green-500">
          <div>blah blah</div>
          <ButtonTrigger handleClick={this.handleClick}></ButtonTrigger>
          <ButtonTrigger handleClick={this.props.onClick}></ButtonTrigger>
        </div> */}
      </>
    );
  }
}

export default HomePage;
