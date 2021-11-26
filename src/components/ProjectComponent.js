import React from "react";
import "./projectStyleSheet.css"
import Modal from "./Modal";

function ProjectComponent(props){
    const [clicked, setClicked] = React.useState(0);

    const scrollRef = React.useRef('');

    const closeModal = ()=>{ //WHY DOESNT THIS WORK
      setClicked(0);
      console.log("yay");
      console.log(clicked);
    }

    return(
        
          <div 
            ref={scrollRef}
            id = "shadow1" 
            className=" p-10 text-white w-10/12 sm:w-96 rounded-lg my-5 mx-10 divide-y-2 cursor-pointer"
            //custom css cause tailwind can't do it
            style={{backgroundColor:"#464141" }}
            onClick={(event)=>{
                    // scrollRef.current.scrollIntoView(true); //true scrolls it to top 
                    if (!clicked) //Test if clicked is active, if not set it active.
                      setClicked(1); //if it was 0 it's now 1. On 1 we want it to scroll to top
                    // console.log(scrollRef.current.getBoundingClientRect())
                    // // window.scrollTo({top: scrollRef.current.offsetTop(), behavior: 'smooth'})
                        
                }
                }
            //add a second box shadow in with a unique color lol
          >
            <h1 className="text-xl m-1">{props.title}</h1>
            <p>{props.text}</p>
            {
        Boolean(clicked) &&
        <Modal text={props.text} closeModal={closeModal}></Modal>
        }
    
          </div>
       
    );
}

export default ProjectComponent;