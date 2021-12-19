import React from "react";
import ProjectComponent from "../components/ProjectComponent";
import LIFE from "../assets/LIFE.pdf"



function FinishedProjects(props) {
  const links1=[["http://acm.engr.scu.edu/inrix/","INRIX Hackathon"], ["https://devpost.com/software/publix-transportation", "Devpost Submission"], ["https://github.com/danielmccannsayles/INRIX_HACKATHON_REAL", "Github Publix Website"]];
  const links2=[["SECONDCHANCES","Final Presentation"], ["THIRDPLACE","Certificate"]];
 
 
  return (
    <div style={{backgroundColor:"white"}} className="md:p-4 md:mb-8">
      <h1 className = "font-bold pt-4 mb-8 text-xl section-header text-center" id="FinishedProjects">Finished Projects</h1>
    <div  className=" flex flex-wrap items-center justify-center lg:w-11/12 mx-auto"
      >
        
      <ProjectComponent 
        screenSize={props.screenSize}
        specialid="1"
        title="Inrix Hackathon"
        text="I attended a hackathon in November 2021 through SCU, sponsored by INRIX[1]. Our project, ‘Publix Transportation,’ got my teammate and I to the final 7 out of 122 participants. Our project was a website built in react.js that compares public transportation cost and private transportation cost, leveraging INRIX’s data and making heavy use of Google & INRIX’s APIs. I worked mostly with the front end design of the website, and the google API’s, including an inserted customizable google map iframe that drew a user-inputted route onto it. If you’d like to see more, check out our devpost submission[2] and the code for our submission on my github profile[3]."
        links={links1}

      ></ProjectComponent>
      <ProjectComponent
        screenSize={props.screenSize}
        specialid="2"
        title="Second Chances Hack"
        text="I won third place at the Second Chances SCU Hackathon in October 2021. I worked with a client, James Binnall, and his soon-to-be non-profit ‘California System-Involved Bar Association’ (CSIBA). I was the only person working on this project, so I had to simultaneously communicate with my client, manage my time, and summarize/present. The tasks I accomplished: Fixing the website aesthetics, including making it mobile friendly through CSS media queries; adding a FAQ and more content to the website; and creating an automated email campaign. You can view the presentation[1] that I gave to the judges, and you can also view the certificate I got for placing in third[2]."
        links={links2}

        >
      </ProjectComponent>
      {/* <ProjectComponent
        specialid="3"
        title="UCANR UCCE Santa Clara"
        text=""
        links={links3}

      ></ProjectComponent> */}
      <div className="my-4"></div> {/*spacer div*/}
      
    </div>
    </div>
    
  );
}

export default FinishedProjects;
