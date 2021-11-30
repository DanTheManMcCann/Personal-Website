import GuessingGame from "./GuessingGame";

function About() {
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <h1
        className="text-center m-4 font-size-lg pt-4 font-bold section-header text-xl"
        id="AboutMe"
        style={{ ScrollMarginTop: "75px" }}
      >
        About
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-center gap-x-20 w-10/12 mx-auto">
          <GuessingGame></GuessingGame>
          <div className="">Heres a little sectino about this website</div>
      </div>
      <div>
          This part should be below the flex part
      </div>
    </div>
  );
}


export default About;