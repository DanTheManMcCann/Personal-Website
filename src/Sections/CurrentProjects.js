import React from "react";
import ProjectComponent from "../components/ProjectComponent";



function CurrentProjects() {

  const links1=[["https://www.passageflight.org/","PASSAGE"], ["https://google.com", "Google"]];
  const links2=[""];
  const links3=[""];
 
  return (
    
    <div style={{backgroundColor:"whitesmoke", color:"#636363"}} className=" flex flex-col items-center section-header"
      id="CurrentProjects">
        <h1 className = "font-bold mx-10 my-5">Current Projects</h1>
      <ProjectComponent
        specialid="1"
        title="App Designer - PASSAGE"
        text="Starting in September 2021, I've been working with a group of students on creating a joint app, education module,
        and physical model for kids in Latin America. Our team is working with/for a project called PASSAGE[1]
        
        Body of project 1. My name is daniel blah b. Here is some lorem ipsum:  Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Integer at sapien magna. Nunc tincidunt, erat aliquam placerat molestie, 
        sapien velit suscipit massa, non tempus justo enim id urna. Fusce faucibus sed eros quis eleifend. 
        Cras lacinia vitae sapien quis maximus. Aenean luctus odio fermentum ipsum vulputate, eget vehicula 
        ipsum commodo. Proin mauris lacus, laoreet ut metus vitae, elementum iaculis velit. 
        Nam sollicitudin nibh ac fringilla tempus. Vestibulum ut ultrices eros, eget molestie lectus. 
        
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
