import React from "react";
import ProjectComponent from "../components/ProjectComponent";



function CurrentProjects() {
  return (
    
    <div style={{backgroundColor:"whitesmoke", color:"#636363"}} className=" flex flex-col items-center ">
        <h1 className = "font-bold mx-10 my-5">Current Projects</h1>
      <ProjectComponent
        specialid="1"
        title="project 1"
        text="Body of project 1. My name is daniel blah b"
      ></ProjectComponent>
      <ProjectComponent
        specialid="2"
        title="project 1"
        text="Body of project 2. My name is daniel blah b"
      ></ProjectComponent>
      <ProjectComponent
        specialid="3"
        title="project 1"
        text="Body of project 3. My name is daniel blah b"
      ></ProjectComponent>
      
    </div>
    
  );
}

export default CurrentProjects;
