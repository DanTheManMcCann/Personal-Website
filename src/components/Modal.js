import reactDom from "react-dom";
import React from "react";
import ScrollLock, { TouchScrollable } from "react-scrolllock";

function Modal(props){
    return reactDom.createPortal(
        <ScrollLock isActive={true}>
        <div style={{height : "100vh" , width: "100vw", position:"fixed", top:"0px", zIndex:"50", backgroundColor:"#464141", color:"white"}}
        className={"h-full w-full fixed top-0, z-50, bg-white "}
        >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 absolute top-2 right-2 stroke-current text-gray-400 hover:text-white cursor-pointer" 
        fill="none" viewBox="0 0 24 24" 
        onClick={props.closeModal}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1>Heyy</h1>
        <p>{props.text}</p>
        </div>
        </ScrollLock>,
        document.querySelector('#modal')
    );
}

export default Modal;

