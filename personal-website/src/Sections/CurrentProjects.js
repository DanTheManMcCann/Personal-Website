import React from "react";
import ProjectComponent from "../components/ProjectComponent";

function CurrentProjects() {
  return (
    <>
    
    <div style={{backgroundColor:"#E0E0E0"}} className=" flex flex-wrap bg-white h-auto items-center justify-evenly">
        <h1 className = "font-bold mx-10 my-5">Current Projects</h1>
      <ProjectComponent
        title="project 1"
        text="Body of project 1. My name is daniel blah b"
      ></ProjectComponent>
      <ProjectComponent
        title="project 1"
        text="Body of project 2. My name is daniel blah b"
      ></ProjectComponent>
      <ProjectComponent
        title="project 1"
        text="Body of project 3. My name is daniel blah b"
      ></ProjectComponent>
    </div>
    </>
  );
}

export default CurrentProjects;
