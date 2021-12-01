import React from "react";
import "./projectStyleSheet.css"
import Modal from "./Modal";

function ProjectComponent(props){
    const [clicked, setClicked] = React.useState(0);
    //add a state hook here that says if its mobile or not. On the small screen I want to display less words in general, and pass the modal a shorter/abbreviated version.

    const scrollRef = React.useRef('');

    const closeModal = ()=>{ 
      setClicked(0);
      console.log("yay");
      console.log(clicked);
    }

    return(
        
          <div 
            ref={scrollRef}
            id = "shadow1" 
            className=" p-6 text-white w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-lg mb-10 mx-5 divide-y-2 cursor-pointer border-white border-2"
            //custom css cause tailwind can't do it
            style={{backgroundColor:"#383838" }}
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
            <h1 className="text-xl m-1 text-center font-bold ">{props.title}</h1>
            <p className="pt-2 lg:text-lg">{props.text.substring(0, 178)}.. [View More]</p>
            {
        Boolean(clicked) &&
        <Modal title={props.title} text={props.text} closeModal={closeModal} links={props.links}></Modal>
        }
    
          </div>
       
    );
}

export default ProjectComponent;