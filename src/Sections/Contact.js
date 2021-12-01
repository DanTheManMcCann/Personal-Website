function Contact() {
  return (
    <div className="bg-purple-500 text-white p-4">
      <h1
        className="text-center font-size-lg pt-4 font-bold section-header text-xl"
        id="Contact"
        style={{ ScrollMarginTop: "75px" }}
      >
        Contact
      </h1>
      <div className="text-center mb-10 mt-5">
        If you have any questions, comments, or ideas, please reach out! Here is my <a className="text-gray-200 underline hover:text-white" target="_blank" href="https://linkedin.com/in/daniel-mccann-sayles">LinkedIn</a>
      </div>
      {/* <div className=" w-1/2 mx-auto">
        <img src="./assets/linkedinLogo"/>
        <div>test</div>
      </div> */}
    </div>
  );
}

export default Contact;
