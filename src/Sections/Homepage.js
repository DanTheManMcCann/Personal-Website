import React from "react";
import ButtonTrigger from "../components/ButtonTrigger";
import TextAnimation from "../components/TextAnimation";
import TextAnimation2 from "../components/TextAnimation2";
import ScrollLock, { TouchScrollable } from "react-scrolllock";
import ProjectComponent from "../components/ProjectComponent";
import gsap from "gsap";
import { ReactComponent as Designer } from "../assets/Designer.svg";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
// gsap.config({autoKillThreshold: 1}); //used to set auto kill threshhold

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.scrollTimeline = gsap.timeline({
      paused: true,
      progress: 0,
      autoKill: true,
      onAutoKill: () => console.log("auto killed"),
    });

    this.state = { splashscreen: 1, intervalId: 0 };

    this.scrollRef = React.createRef("");
  }

  updateColor() {
    //run in set interval in componentdid mount. Used to update the color of the circles
    let num =
      Math.floor(this.scrollRef.current.scrollLeft / window.innerWidth + 0.5) +
      1;
    this.setState({ splashscreen: num });
  }

  handleClick(e) {
    this.scrollTimeline.kill(); //stop scroll timeline from playing
    clearInterval(this.state.intervalId); //pause interval otherwise circles get janky
    const num = parseInt(e.currentTarget.getAttribute("data-tag"));
    {
      /*I use currentTarget because it refers to the <svg el. e.target would refer to the <circle el, which has a null data-tag*/
    }
    gsap.to(this.scrollRef.current, {
      duration:
        1 +
        Math.abs(this.state.splashscreen - num) /
          2 ,
      ease: "power2",
      scrollTo: { x: window.innerWidth * (num - 1) },
    });
    this.setState({ splashscreen: num }); //update state to change color of circle
    setInterval(this.state.intervalId);
  }

  handleScroll() {
    if (this.scrollTimeline.isActive()){
      console.log("kill");
      this.scrollTimeline.kill();
      setInterval(this.state.intervalId);
    }
  }

  componentDidMount() {
    document.addEventListener("touchmove", this.handleScroll);
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("wheel", this.handleScroll);

    let intervalId = setInterval(() => {
      //updates the circles in the splash screen page
      this.updateColor();
    }, 200);

    this.setState({ intervalId: intervalId }); //adds interval id to state so it can be cleared later
    clearInterval(this.state.intervalId); //pause interval

    const scrollRef=this.scrollRef;
    setTimeout(() => {
      setInterval(this.state.intervalId);
    }, 10 * 1000); //set interval in 10 seconds after animation ends

    const modifier = 1; //should be
    this.scrollTimeline
      .to(this.scrollRef.current, { duration: 0.1, scrollTo: { x: 0 } })
      .to(
        this.scrollRef.current,
        {
          duration: 2,
          ease: "power2",
          scrollTo: { x: window.innerWidth * modifier },
        },
        ">+=1.5"
      )
      .to(
        this.scrollRef.current,
        {
          duration: 2,
          ease: "power2",
          scrollTo: { x: window.innerWidth * modifier * 2 },
        },
        ">+=1.5"
      ) //1.5 seconds after
      .to(
        this.scrollRef.current,
        {
          duration: 2,
          ease: "power2",
          scrollTo: { x: window.innerWidth * modifier * 3 },
        },
        ">+=1.5"
      ) //1.5 seconds after
      .play();
  }

  componentDidUpdate(prevProps, prevState) {
    //prevprops old prop object
    if (
      this.props.yPos !== prevProps.yPos &&
      this.props.yPos > window.innerHeight / 4
    ) {
      //if it changes & If the user is far down the page
      this.scrollTimeline.progress(1);
      this.scrollTimeline.play();
      this.scrollTimeline.pause();
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId); //clears interval

    document.removeEventListener("touchmove", this.handleScroll);
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("wheel", this.handleScroll);
  }

  render() {
    return (
      <>
        <div className="h-screen">
          <div className="bg-black relative scroll-wrapper">
            <div
              className="horiz-scroll w-full bg-white h-full"
              ref={this.scrollRef}
              style={{ overflowY: "hidden" }}
            >
              <Designer
                className="scroll-item"
                width="100vw"
                viewBox={"0 0 " + window.innerWidth}
              />
              <Designer
                className="scroll-item"
                width="100vw"
                viewBox={"0 0 " + window.innerWidth}
              />
              <Designer
                className="scroll-item"
                width="100vw"
                viewBox={"0 0 " + window.innerWidth}
              />
              <Designer
                className="scroll-item"
                width="100vw"
                viewBox={"0 0 " + window.innerWidth}
              />

              {/* <img src={homePage2} className="h-1/2"></img>
            <img src={homePage3} className="h-1/2"></img>
            <img src={homePage4} className="h-1/2"></img> */}
            </div>

            <div className="absolute bottom-2 left-1/2 inline-flex svgclass  w-1/4 flex justify-center gap-2">
              <svg
                height="50"
                width="50"
                className=""
                onClick={this.handleClick}
                data-tag="1"
              >
                <circle
                  data-tag="two"
                  className={
                    this.state.splashscreen == 1
                      ? "fill-current text-white"
                      : "fill-current text-gray-400 hover:text-white"
                  }
                  cx="30"
                  cy="30"
                  r="2vh"
                />
              </svg>
              <svg
                height="50"
                width="50"
                className=""
                onClick={this.handleClick}
                data-tag="2"
              >
                <circle
                  className={
                    this.state.splashscreen == 2
                      ? "fill-current text-white"
                      : "fill-current text-gray-400 hover:text-white"
                  }
                  cx="30"
                  cy="30"
                  r="2vh"
                />
              </svg>
              <svg
                height="50"
                width="50"
                className=""
                onClick={this.handleClick}
                data-tag="3"
              >
                <circle
                  className={
                    this.state.splashscreen == 3
                      ? "fill-current text-white"
                      : "fill-current text-gray-400 hover:text-white"
                  }
                  cx="30"
                  cy="30"
                  r="2vh"
                />
              </svg>
              <svg
                height="50"
                width="50"
                className=""
                onClick={this.handleClick}
                data-tag="4"
              >
                <circle
                  className={
                    this.state.splashscreen == 4
                      ? "fill-current text-white"
                      : "fill-current text-gray-400 hover:text-white"
                  }
                  cx="30"
                  cy="30"
                  r="2vh"
                />
              </svg>
            </div>
          </div>

          <div className="bg-gray-100 h-1/2 w-full py-10">
            <div className="w-10/12 flex gap-20 h-24 w-full justify-center" style={{height:window.innerHeight*(2.6/10)}}>
              <div className="text-center w-1/4">
                <h1 className="text-2xl text-red-500 font-bold">Designer</h1>
                <p>
                  This is the body of the class what will it havce it in it lets
                  see
                </p>
              </div>
              <div className="m-x-10 text-center w-1/4">
                <h1 className="text-2xl text-green-500 font-bold"> Engineer</h1>
                <p>
                  This is the body of the class what will it havce it in it lets
                  see
                </p>
              </div>
              <div className="m-x-10 text-center w-1/4">
                <h1 className="text-2xl text-blue-500 font-bold"> Student</h1>
                <p>
                  This is the body of the class what will it havce it in it lets
                  see
                </p>
              </div>
            </div>
            <div className="w-screen bg-black text-white sticky" style={{height:window.innerHeight*(1/10)}}> This is going to be the navbar</div>
          </div>
        </div>
        {/* <ScrollLock isActive={this.props.lockScroll}> */}
        {/*<div
          className="flex items-center justify-evenly"
          style={{
            scrollSnapStop: "always",
            background:
              "linear-gradient(to top, rgb(17, 24, 39), rgb(88, 28, 135), rgb(124, 58, 237))",
          }}
          id="HomePage"
        > */}
        {/* <TextAnimation
                timescale={1}
                end={this.props.yPos > 150}
              ></TextAnimation> */}

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
