import reactDom from "react-dom";
import React from "react";
import ScrollLock, { TouchScrollable } from "react-scrolllock";

function Modal(props) {
  const footnotes = props.links.map((row, index) => {
    return (
      <li key={index}>
        <a
          key={index}
          target="_blank"
          className="sm:text-gray-400 sm:hover:text-white inline-flex underline sm:no-underline"
          href={row[0]}
        >
          {index + 1}. {row[1]}{" "}
        </a>
      </li>
    );
  });

  return reactDom.createPortal(
    <ScrollLock isActive={true}>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: "0px",
          zIndex: "50",
          backgroundColor: "#383838",
          color: "white",
        }}
        className="h-full w-full z-50 bg-white"
      >
        <div className="sm:mt-4 lg:mt-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 absolute top-2 right-2 sm:right-20 md:right-40 lg:top-12 lg:right-72 xl:right-96 stroke-current text-white sm:text-gray-400 sm:hover:text-white cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            onClick={props.closeModal}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <div className="divide-y-2 w-10/12 sm:w-8/12 md:w-7/12 lg:w-5/12 mx-auto">
            <h1 className="text-center mt-12 mb-2 font-bold text-xl">
              {props.title}
            </h1>
            <p className="p-4 sm:text-lg"> {props.text}</p>
            <ol>{footnotes}</ol>
          </div>
        </div>
      </div>
    </ScrollLock>,
    document.querySelector("#modal")
  );
}

export default Modal;
