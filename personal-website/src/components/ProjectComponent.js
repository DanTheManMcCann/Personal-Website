import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

function ProjectComponent(props){
    return(
        
          <div
            className=" p-10 text-white w-80 rounded-lg my-10 mx-10"
            style={{ boxShadow: "-4vw -4vw #878282", backgroundColor:"#464141" }}
            //add a second box shadow in with a unique color lol
          >
            <h1 className="text-xl m-1">{props.title}</h1>
            <p>{props.text}</p>
          </div>
       
    );
}

export default ProjectComponent;