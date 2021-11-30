import React from "react";
import ProjectComponent from "../components/ProjectComponent";



function CurrentProjects() {

  const links1=[["https://www.passageflight.org/","PASSAGE"], ["", "Figma Rough Draft"], ["https://github.com/danielmccannsayles/personal-website", "Github Personal Website"]];
  const links2=[""];
  const links3=[""];
 
  return (
    
    <div style={{backgroundColor:"whitesmoke", color:"#636363"}} className=" flex flex-col items-center section-header"
      id="CurrentProjects">
        <h1 className = "font-bold mx-10 my-5">Current Projects</h1>
      <ProjectComponent
        specialid="1"
        title="App Designer - PASSAGE"
        text="Since September 2021, I've been working with a group of students on creating a joint app, education module, and physical model for kids in Latin America. Our team is working with a project called PASSAGE[1]. My role on the team is designing and creating a mobile app that will contain custom education modules to engage kids and teach about STEM subjects along with water safety. To do this I’m using React-Native. You can view the (very) rough draft figma files[2] for it, or read our current design proposal[3]. This past quarter we’ve been brainstorming and planning, so I’ll update this website once more tangible progress has been made.
        "
        links={links1}
        >
      </ProjectComponent>
      <ProjectComponent
        specialid="2"
        title="project 1"
        text="Body of project 2. My name is daniel blah b"
        links={links2}
      ></ProjectComponent>
      <ProjectComponent
        specialid="3"
        title="project 1"
        text="Body of project 3. My name is daniel blah b"
        links={links3}
      ></ProjectComponent>
      
    </div>
    
  );
}

export default CurrentProjects;
