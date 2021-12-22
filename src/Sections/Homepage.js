import React from "react";
import ButtonTrigger from "../components/ButtonTrigger";
import TextAnimation from "../components/TextAnimation";
import TextAnimation2 from "../components/TextAnimation2";
import ScrollLock, { TouchScrollable } from "react-scrolllock";
import ProjectComponent from "../components/ProjectComponent";


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("test 100");
  }

  render() {
    return (
      <>
        <ScrollLock isActive={this.props.lockScroll}>
        <div className="flex h-screen  items-center justify-evenly" style={{scrollSnapStop: 'always', background:"linear-gradient(to top, rgb(17, 24, 39), rgb(88, 28, 135), rgb(124, 58, 237))"}}
        id="HomePage">
          <TextAnimation timescale= {1} end={this.props.yPos > 150} ></TextAnimation>
        </div>
        </ScrollLock>
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
