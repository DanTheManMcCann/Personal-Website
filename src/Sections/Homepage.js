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
        <div className="flex h-screen bg-gradient-to-r from-green-400 to-blue-500 items-center justify-evenly" style={{scrollSnapStop: 'always'}}>
          <TextAnimation></TextAnimation>
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
