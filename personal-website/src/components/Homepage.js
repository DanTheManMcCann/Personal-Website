import React from "react";
import ButtonTrigger from "./ButtonTrigger";
import TextAnimation from "./TextAnimation";
import TextAnimation2 from "./TextAnimation2";
import ScrollLock from "react-scrolllock";

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
        <div className="bg-green-500 md:bg-red-500 lg:bg-green-500">
          <div>blah blah</div>
          <ButtonTrigger handleClick={this.handleClick}></ButtonTrigger>
          <ButtonTrigger handleClick={this.props.onClick}></ButtonTrigger>
        </div>
        <div className="bg-green-100 mx-10 flex flex-wrap bg-white h-auto items-center justify-evenly">
          <div
            className="bg-purple-400 text-white w-40 rounded-lg my-10 mx-5"
            style={{ boxShadow: "-1vw -1vw teal" }}
          >
            <h1>This is header</h1>
            <p>This is the body of this area and hopefully it works</p>
          </div>
          <div
            className="bg-purple-400 text-white w-40"
            style={{ boxShadow: "-30px -16px teal" }}
          >
            <h1>This is header</h1>
            <p>This is the body of this area and hopefully it works</p>
          </div>
          <div
            className="bg-purple-400 text-white w-40"
            style={{ boxShadow: "-30px -16px teal" }}
          >
            <h1>This is header</h1>
            <p>This is the body of this area and hopefully it works</p>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
