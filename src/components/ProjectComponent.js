import React from "react";
import "./projectStyleSheet.css";
import Modal from "./Modal";

import LIFE from "../assets/LIFE.pdf";
import SECONDCHANCES from "../assets/SECONDCHANCES.pdf";
import THIRDPLACE from "../assets/ThirdPlace.pdf";

function ProjectComponent(props) {
  //expecting a screensize prop
  const [clicked, setClicked] = React.useState(false);
  //add a state hook here that says if its mobile or not. On the small screen I want to display less words in general, and pass the modal a shorter/abbreviated version.

  const scrollRef = React.useRef("");

  const close = () => {
    setClicked(false);
    console.log("yay");
    console.log(clicked);
  };

  const footnotes = props.links.map((row, index) => {
    return (
      <li key={index}>
        <a
          key={index}
          target="_blank"
          className="sm:text-gray-400 sm:hover:text-white inline-flex underline sm:no-underline"
          href={
            row[0] == "LIFE"
              ? LIFE
              : row[0] == "SECONDCHANCES"
              ? SECONDCHANCES
              : row[0] == "THIRDPLACE"
              ? THIRDPLACE
              : row[0] //check if it's a pdf, otherwise it's just the normal link
          }
        >
          {index + 1}. {row[1]}{" "}
        </a>
      </li>
    );
  });

  return (
    <>
      <div
        ref={scrollRef}
        className={
          "p-6 text-white w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 mb-10 mt-5 sm:mx-5 cursor-pointer border-purple-400 relative " +
          (clicked ? "border-4" : "")
        }
        //custom css cause tailwind can't do it
        style={{ backgroundColor: "#383838" }}
        onClick={() => {
          if (!clicked) {setClicked(true)};
        }}
      >
      <>
        {clicked &&
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 absolute top-2 right-2 stroke-current text-purple-400"
            fill="none"
            viewBox="0 0 24 24"
            onClick={close}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>}
          </>

        <div className="divide-y-2">
          <h1 className="text-xl m-1 text-center font-bold ">{props.title}</h1>
          <p className="pt-2 lg:text-lg">
            {props.screenSize == "small" &&
              props.text.substring(0, 178) +
                (clicked? props.text.substring(179, props.text.length): ".. [View More]") }
          </p>

          {clicked && <div> {footnotes}</div>}

          {(clicked && props.screenSize !== "small") && (
            <div
              className="absolute text-purple-500"
              style={{
                bottom: "-68px", //set this to height of triangle plus border offset
                left: "50px",
                width: 0,
                height: 0,
                borderLeft: "60px solid transparent",
                borderRight: "60px solid transparent",

                borderBottom: "60px solid purple",
              }}
            ></div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectComponent;
