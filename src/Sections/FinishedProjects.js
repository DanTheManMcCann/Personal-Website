import React from "react";
import ProjectComponent from "../components/ProjectComponent";



function FinishedProjects(props) {
  const links1=[["http://acm.engr.scu.edu/inrix/","INRIX Hackathon"], ["https://devpost.com/software/publix-transportation", "Devpost Submission"], ["https://github.com/danielmccannsayles/INRIX_HACKATHON_REAL", "Github Publix Website"]];
  const links2=[["https://www.passageflight.org/","PASSAGE"], ["https://www.figma.com/file/ruSc5swK1Du2FDHgubDblX/App-v.2-Filtration?node-id=0%3A1", "Figma Rough Draft"], ["../assets/LIFE.pdf","Design Proposal"] ];
  const links3=[["https://www.csulb.edu/criminology-criminal-justice-and-emergency-management/page/james-m-binnall","James Binall"], ["https://csiba.org","California System-Involved Bar Association"]];
 
 
  return (
    <div style={{backgroundColor:"white"}}>
      <h1 className = "font-bold mx-10 p-4 py-8 text-xl section-header text-center" id="FinishedProjects">Finished Projects</h1>
    <div  className=" flex flex-wrap items-center justify-center w-10/12 lg:w-11/12 mx-auto"
      >
        
      <ProjectComponent
        specialid="1"
        title="Inrix Hackathon"
        text="I attended a hackathon in November 2021 through SCU, sponsored by INRIX[1]. My project, ‘Publix Transportation,’ got my teammate and I to the final 7 out of 122 participants. Our project was a website built in react.js that compares public transportation cost and private transportation cost, leveraging INRIX’s data and making heavy use of Google & INRIX’s APIs. Since I only had one teammate, we both did a bit of everything. I worked more with the front end design of the website, and the google API’s, including an inserted customizable google map iframe that drew a user-inputted route onto it. If you’d like to see more, check out our devpost submission[2] and the code for our submission on my github profile[3]."
        links={links1}

      ></ProjectComponent>
      <ProjectComponent
        specialid="2"
        title="Second Chances Hack"
        text="I won third place at the Second Chances Third Annual Hackathon in October 2021 through SCU. The theme was second chances in the justice system, and I worked with a client, James Bunalli, and his soon-to-be non-profit ‘California System-Involved Bar Association’ (CSIBA). I was the only person working on this project, so I had to simultaneously communicate with my client, manage my time, accomplish the tasks given to me, and summarize/present this whole amalgamation. The tasks I accomplished: Fixing the website aesthetics, including making it mobile friendly through CSS media queries - Adding a FAQ and more content to the website - Creating an automated email campaign - and more. You can view my presentation[1] that I gave to the judges, and you can also view the certificate I got for placing in third[2]."
        links={links2}

        >
      </ProjectComponent>
      <ProjectComponent
        specialid="3"
        title="UCANR UCCE Santa Clara"
        text=""
        links={links3}

      ></ProjectComponent>
      <div class="my-4"></div> {/*spacer div*/}
      
    </div>
    </div>
    
  );
}

export default FinishedProjects;
