function Contact() {
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <h1
        className="text-center m-4 font-size-lg pt-4 font-bold section-header text-xl"
        id="AboutMe"
        style={{ ScrollMarginTop: "75px" }}
      >
        Contact
      </h1>
      <div>
        {" "}
        If you have any questions or comments or ideas, please reach out! Below
        are my LinkedIn and Github.
      </div>
      <div className="inline-flex">
        <div>This part should be below the flex part</div>
      </div>
    </div>
  );
}

export default Contact;
