import reactDom from "react-dom";
import React from "react";

function Modal(props){
    return reactDom.createPortal(
        <div style={{height : "100vh" , width: "100vw", position:"fixed", top:"0px", zIndex:"5", backgroundColor:"green"}}
        className={"h-full w-full fixed top-0, z-10, bg-white "}
        >
        <h1>Heyy</h1>
        <p>{props.text}</p>
        </div>,
        document.querySelector('#modal')
    );
}

export default Modal;