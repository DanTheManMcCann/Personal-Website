import React from "react";
import ProjectComponent from "../components/ProjectComponent";



function CurrentProjects(props) {
  const links1=[["https://greensock.com","Green Sock Animation Plugin"], ["https://www.figma.com/file/7GH6pfk1eta5mPU1VMaPiY/Rough-Draft?node-id=0%3A1", "Figma Rough Draft"], ["https://github.com/danielmccannsayles/personal-website", "Github Personal Website"]];
  const links2=[["https://www.passageflight.org/","PASSAGE"], ["https://www.figma.com/file/ruSc5swK1Du2FDHgubDblX/App-v.2-Filtration?node-id=0%3A1", "Figma Rough Draft"], ["LIFE","Design Proposal"] ];
  const links3=[["https://www.csulb.edu/criminology-criminal-justice-and-emergency-management/page/james-m-binnall","James Binnall"], ["https://csiba.org","California System-Involved Bar Association"]];
 
 
  return (
    <div style={{backgroundColor:"whitesmoke"}} className="section-header md:mb-8 md:p-4">
    <h1 className = "font-bold mx-10 pt-8 text-xl text-center section-header mb-8" id="CurrentProjects">Current Projects</h1>
    <div  className=" flex flex-wrap items-center justify-center lg:w-11/12 mx-auto"
      >
        
      <ProjectComponent
        specialid="1"
        title="Personal Website"
        text="This website is a digital portfolio showcasing projects I’ve worked on and skills I’ve acquired. It allows me much more flexibility to showcase my work than a normal resume. I wrote it in React.js using Tailwind CSS for styling. I used GSAP[1] for the animation on the homepage. The process I followed for making this website involved creating a wireframe and rough draft in figma, and then attempting to code it. You can view the rough draft here[2]. If you’d like to read more about the website or see the source code, check out the github page[3] or scroll down to the about section!"
        links={links1}

      ></ProjectComponent>
      <ProjectComponent
        specialid="2"
        title="App Designer - PASSAGE"
        text="Since September 2021, I've been working with a group of students on creating a joint app, education module, and physical model for kids in Latin America. Our team is working with a project called PASSAGE[1]. My role on the team is designing and creating a mobile app to engage kids and teach about STEM subjects along with water safety. To do this I’m using React Native. You can view the (very) rough draft figma files[2] for it, or read our current design proposal[3]. This past quarter we’ve been brainstorming and planning, so I’ll update this website once more tangible progress has been made."
        links={links2}

        >
      </ProjectComponent>
      <ProjectComponent
        specialid="3"
        title="Freelance Web Design"
        text="After my work in the Second Annual Chances Hackathon(which you can read about in my Finished Projects section) I stayed in touch with my client, James Binnall[1]. Since then we’ve discussed my working freelance to create his own personal website, and my working as a web designer for his soon-to-be non-profit ‘California System-Involved Bar Association’ [2]. As we move forward with this I’ll update this website, and link to the work I do for him. "
        links={links3}

      ></ProjectComponent>
      <div class="my-4"></div> {/*spacer div*/}
      
    </div>
    </div>
    
  );
}

export default CurrentProjects;
